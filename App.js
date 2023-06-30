import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View} from 'react-native';
import Login from './app/screens/Login'
import HomeNav from './app/screens/HomeFlow/HomeNav'
import BrowseNav from './app/screens/BrowseFlow/BrowseNav'
import Scan from './app/screens/Scan'
import ProfileNav from './app/screens/ProfileFlow/ProfileNav'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Ignore all warnings
LogBox.ignoreAllLogs();

MaterialIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={() => ({
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: '#208B3A',
    })}>
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={32} color={color} />
          ),
          headerShown: false,
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Home', { screen: 'HomeMain' });
          },
        })}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseNav}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" size={32} color={color} />
          ),
          headerShown: false,
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Browse', { screen: 'BrowseMain' });
          },
        })}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="qr-code" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNav}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" size={32} color={color} />
          ),
          headerShown: false,
        }}
          listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Profile', { screen: 'Profile' });
          },
        })}
      />
    </Tab.Navigator>
  );
};

let isSignedIn = true //CHANGE to using backend check

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {isSignedIn ? (
          <>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          </>
        ) : (
          <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
  logo: {
    width: 109,
    height: 34,
    position: 'absolute',
    left: 40,
    top: 46,
  }
});

export default App;

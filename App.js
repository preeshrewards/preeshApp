import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login'
import Home from './app/screens/Home'
import Browse from './app/screens/Browse'
import Scan from './app/screens/Scan'
import Account from './app/screens/Account'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

MaterialIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      style: styles.tabBar,
      activeTintColor: '#208B3A',
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" size={32} color={color} />
          ),
          headerShown: false,
        }}
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
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

let isSignedIn = false //CHANGE to using backend check

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
            options={{headerShown: false, cardStyle:{backgroundColor:'#B7EFC5'}}}
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
});

export default App;

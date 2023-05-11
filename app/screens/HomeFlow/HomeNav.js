
import React from 'react';
import {} from 'react';
import {} from 'react-native';
import HomeMain from './Home'
import HowItWorks from './HowItWorks'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();



const HomeNav = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
            name="HomeMain"
            component={HomeMain}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="HowItWorks"
            component={HowItWorks}
            options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};


export default HomeNav;
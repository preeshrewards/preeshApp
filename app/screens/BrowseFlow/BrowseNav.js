
import React from 'react';
import {} from 'react';
import {} from 'react-native';
import BrowseMain from './Browse'
import Search from './Search'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();



const BrowseNav = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
            name="BrowseMain"
            component={BrowseMain}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};


export default BrowseNav;
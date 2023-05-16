import React from 'react';
import {View, Text} from 'react-native';
import Profile from './Profile'
import EditAccount from './EditAccount'
import SavedDeals from '../SavedDeals'
import MostPopular from '../MostPopular'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainProfile = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="EditAccount"
              component={EditAccount}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="SavedDeals"
              component={SavedDeals}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="MostPopular"
              component={MostPopular}
              options={{headerShown: false}}
          />
        </Stack.Navigator>
    );
  };

export default MainProfile;
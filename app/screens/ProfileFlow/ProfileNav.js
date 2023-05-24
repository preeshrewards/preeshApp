import React from 'react';
import {View, Text} from 'react-native';
import Profile from './Profile'
import EditAccount from './EditAccount'
import About from './About'
import History from './History'
import Promotions from './Promotions'
import Invite from './Invite'
import SavedDeals from '../SavedDeals'
import MostPopular from '../MostPopular'
import BuyGift from '../BuyGift'
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
          <Stack.Screen
              name="About"
              component={About}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="Invite"
              component={Invite}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="Promotions"
              component={Promotions}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="History"
              component={History}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="Notifications"
              component={History}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="BuyGift"
              component={BuyGift}
              options={{headerShown: false}}
          />
        </Stack.Navigator>
    );
  };

export default MainProfile;
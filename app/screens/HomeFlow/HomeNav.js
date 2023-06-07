
import React from 'react';
import {} from 'react';
import {} from 'react-native';
import HomeMain from './Home'
import HowItWorks from './HowItWorks'
import SavedDeals from '../SavedDeals'
import MostPopular from '../MostPopular'
import BuyGift from '../BuyGift'
import Checkout from '../Checkout'
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
              name="BuyGift"
              component={BuyGift}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{headerShown: false}}
          />
      </Stack.Navigator>
  );
};


export default HomeNav;
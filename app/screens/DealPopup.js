
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import logo from '../../assets/logo.png'
import restaurantImagePlaceholder from '../../assets/restaurantImagePlaceholder.png'
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { SafeAreaView } from 'react-native-safe-area-context';

class SavedReward {
  points = 0
  picture = ""
  rewardDescription = ""
  restaurantName = ""

  constructor(points, picture, rewardDescription, restaurantName) {
    this.points = points;
    this.picture = picture;
    this.rewardDescription = rewardDescription
    this.restaurantName = restaurantName
  }
  
  // constructor() {}
};
// const deal = new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell")
const code = "6132 7279 5118 3797"

const Popup = ( {argument} ) => {
  const deal = argument
  console.log(deal)
  return (
    <View style={scanStyles.container}>
      <Image source={logo} style={scanStyles.logo}/>
      <View>
        <Image source={argument.picture} style={scanStyles.restaurantImage}/>
        <View style={{}}>
          <Text></Text>
        </View>
      </View>
      <View style={{backgroundColor: '#B7EFC5', borderRadius: 10, alignSelf: 'center', height: 31, width: 134, top: 3, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{deal.rewardDescription}</Text>
      </View>
      <View style={{alignSelf: 'center', top: 300, position: 'absolute'}}>
        <QRCode size={129} content={code}/>
      </View>
      <Text style={[scanStyles.code, {top: 435}]}>{code}</Text>
      <Text style={[scanStyles.code, {top: 464}]}>Scan to use rewards</Text>
    </View>
  );
};

const scanStyles = StyleSheet.create({
    logo: {
        width: 218,
        height: 68,
        alignSelf: 'center',
        top: 7,
      },
      restaurantImage: {
        width: 339,
        height: 174,
        alignSelf: 'center',
        top: 12,
      },
    code: {
        fontSize: 13,
        fontWeight: 400,
        position: 'absolute',
        alignSelf: 'center',
        color: '#545454'
    },
    container: {
      height: 501,
      width: 339,
      top: 70,
      alignSelf: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }
});

export default Popup;

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import logo from '../../assets/logo.png'
import restaurantImagePlaceholder from '../../assets/restaurantImagePlaceholder.png'
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import coin from '../../assets/coin.png'

const Popup = ( {argument} ) => {
  const deal = argument
  return (
    <View style={scanStyles.container}>
      <Image source={logo} style={scanStyles.logo}/>
      <View>
        <Image source={argument.picture} style={scanStyles.restaurantImage}/>
        <View style={scanStyles.points}>
           <Text style={scanStyles.pointsText}>{argument.points} Preesh </Text>
           <Image source={coin} style={scanStyles.coin}/>
        </View>
        <View style={{}}>
          <Text></Text>
        </View>
      </View>
      <View style={{backgroundColor: '#B7EFC5', borderRadius: 10, alignSelf: 'center', height: 31, width: 134, top: 3, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{deal.rewardDescription}</Text>
      </View>
      <View style={{alignSelf: 'center', top: 300, position: 'absolute'}}>
        <QRCode size={129} content={deal.code}/>
      </View>
      <Text style={[scanStyles.code, {top: 435}]}>{deal.code}</Text>
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
    },
    points: {
      flexDirection: 'row',
      position: 'absolute',
      top: 150,
      backgroundColor: '#B7EFC5',
      padding: 5,
      borderRadius: 10,
      left: 5
    },
    pointsText: {
      fontWeight: 700,
      fontSize: 14,
      color: '#208B3A'
    },
    coin: {
      height: 19,
      width: 12,
    }
});

export default Popup;
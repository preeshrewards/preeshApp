import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet, Button, Animated, Easing} from 'react-native';
import giftCard from '../../../assets/giftCard.png'
import Checkbox from 'expo-checkbox';
import coin from '../../../assets/coin.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

AntDesign.loadFont();
MaterialCommunityIcons.loadFont();

let pointsTotal = 200.0
let currentBalance = '20.0'
// need to add proper algorithm for calcuting pressh points

const GiftCard = ( {navigation} ) => {
  const [inputValue, setInputValue] = useState(currentBalance);
  const [isSelected, setSelection] = useState(false);



  return (
    <SafeAreaView>
      <Text style={buyGiftStyle.title}>Preesh Card</Text>
      <AntDesign style={buyGiftStyle.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                  navigation.goBack(null)
                  }
        />
      <Image source={giftCard} style={buyGiftStyle.giftCard}/>
      <View style={buyGiftStyle.amount}>
        <View style={[buyGiftStyle.text, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={{fontSize: 22, fontWeight: 400}}>Card Balance: $</Text>
          {/* <Image source={coin} style={buyGiftStyle.coin}/> */}
          <Text style={{fontSize: 22, fontWeight: 500, color: '#208B3A'}}>{inputValue}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <TouchableOpacity style={buyGiftStyle.select}
        onPress={() =>
          navigation.navigate('AddFunds', {})
        }>
            <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 22, color: 'white', fontWeight: 500, textAlign: 'center', lineHeight: 30}}>Add Funds{"\n"}
                <MaterialIcons style={buyGiftStyle.backArrow} name="add-circle" size={30} color={'white'}
                    onPress={() =>
                    navigation.goBack(null)
                    }
                />
                </Text>
                
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={buyGiftStyle.select}
        onPress={() =>
          navigation.navigate('BuyGift', {})
        }>
            <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 22, color: 'white', fontWeight: 500, textAlign: 'center', lineHeight: 30}}>Buy a Gift{"\n"}
                <MaterialCommunityIcons style={buyGiftStyle.backArrow} name="gift" size={30} color={'white'}
                    onPress={() =>
                    navigation.goBack(null)
                    }
                />
                </Text>
                
            </View>
        </TouchableOpacity>
        <Text style={{position: 'absolute', width: 290, textAlign: 'center', top: 300, fontSize: 18}}>
            Turn Preesh Points to Preesh card money redeemable at any of our Pressh partners.</Text>
      </View>
    </SafeAreaView>
  );
};

const buyGiftStyle = StyleSheet.create({

  giftIt: {
    alignItems: 'center', height:45, borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey', justifyContent: 'center',
    backgroundColor: '#f9f9f9', width: 70, alignSelf: 'center'
  },
  notEnough: {
    alignSelf: 'center',
    color: 'red',
  },
  select: {
    padding: 15,
    width: 150,
    margin: 8,
    marginTop: 175,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    backgroundColor: '#208B3A',
    // top: 175,
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 5,
  },
  logo: {
    width: 109,
    height: 34,
    position: 'absolute',
    left: 40,
    top: 46,
  },
  backArrow: {
    left: 29,
    top: 80,
    position: 'absolute',
    height: 24
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
    top: 80,
    position: 'absolute',
    alignSelf: 'center'
  },
  giftCard: {
    height: 198.72,
    width: 300,
    borderRadius: 16,
    alignSelf: 'center',
    top: 100
  },
  amount: {
    justifyContent: 'center',
    // alignItems: 'left',
    top: 350,
    position: 'absolute',
    alignSelf: 'center',
    // flexDirection: 'row'
  },
  text: {
    // borderWidth: 1,
    // borderColor: '#B7EFC5',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    // color: '#10451D',
    margin: 5,
    // backgroundColor: '#D9D9D980',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    width: 290,
    elevation: 5
  }
});

export default GiftCard;
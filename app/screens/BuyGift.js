import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet, Button} from 'react-native';
import giftCard from '../../assets/giftCard.png'
import Checkbox from 'expo-checkbox';
import coin from '../../assets/coin.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

AntDesign.loadFont();
MaterialCommunityIcons.loadFont();

let pointsTotal = 200.0
// need to add proper algorithm for calcuting pressh points

const BuyGift = ( {navigation} ) => {
  const [inputValue, setInputValue] = useState('0');
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView>
      <Text style={buyGiftStyle.title}>Buy a Gift Card</Text>
      <AntDesign style={buyGiftStyle.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                  navigation.goBack(null)
                  }
        />
      <Image source={giftCard} style={buyGiftStyle.giftCard}/>
      <View style={buyGiftStyle.amount}>
        {/* <Text style={buyGiftStyle.text}>Card Amount: $
          <Text style={{fontSize: 24, fontWeight: 600}}>{inputValue} </Text>
        </Text> */}
        <View style={[buyGiftStyle.text, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={{fontSize: 22, fontWeight: 400}}>Card Amount: $</Text>
          {/* <Image source={coin} style={buyGiftStyle.coin}/> */}
          <Text style={{fontSize: 22, fontWeight: 500, color: '#208B3A'}}>{inputValue}</Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <TouchableOpacity
          style={buyGiftStyle.fundChange}
          onPress={() =>
            setInputValue(inputValue > 0 ? String(Number(inputValue) - 5): 0)
          }
          >
            <Text style={{fontSize: 22, color: '#F4F2EC'}}> - $5</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={buyGiftStyle.fundChange}
          onPress={() =>
            setInputValue(String(Number(inputValue) + 5))
          }
          >
            <Text style={{fontSize: 22, color: '#F4F2EC'}}> + $5</Text>
          </TouchableOpacity>
        </View>
        <View style={[buyGiftStyle.text, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={{fontSize: 22, fontWeight: 400}}>Preesh</Text>
          <Text style={{fontSize: 22, fontWeight: 400}}>: </Text>
          <Image source={coin} style={buyGiftStyle.coin}/>
          <Text style={{color: '#208B3A', fontSize: 22, fontWeight: 500}}> {inputValue *5} </Text>
        </View>
        {/* <View style={[buyGiftStyle.text, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={{fontSize: 24, fontWeight: 500}}>Send to Someone  </Text>
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            color='#208B3A'
          />
        </View> */}
      </View>
      <View style={{alignItems: 'center', borderRadius: 20,
         borderColor: 'grey', justifyContent: 'center', alignSelf: 'center', top: 310}}>
            <Text style={{fontSize: 18, fontWeight: 500, marginBottom: 3}}>Select to gift it </Text>
            <View style={[buyGiftStyle.giftIt, { backgroundColor: isSelected ? 'black' : '#f9f9f9' }]}>
            <MaterialCommunityIcons name="gift" size={30} color={isSelected ? 'white' : 'black'}
                onPress={() =>
                    setSelection(true)

                  }
                />
                </View>
      </View>
      <View style={buyGiftStyle.select}>
        <TouchableOpacity
        onPress={() =>
          navigation.navigate('Checkout', {})
        }>
            <Text style={{fontSize: 22, color: 'white', fontWeight: 500}}>Checkout</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={[buyGiftStyle.description, {flexDirection: 'row', alignItems: 'center'}]}>
        <Text style={{fontSize: 15, fontWeight: 400}}>Choose to send it to someone</Text>
      </View> */}
        
      {/* <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{borderBottomWidth: 1, borderTopWidth: 1, alignItems: 'center', borderRightWidth: 1,
                    borderColor: '#A39E9E', top: 320, width: '50%', height: 85, justifyContent: 'center'}}>
                <MaterialCommunityIcons name="email" size={35} color={'black'}
                onPress={() =>
                    Linking.openURL(`mailto:?subject=${subject}&body=${emailMessage}`)
                  }
                />
                <Text style={{paddingTop: 5}}>Email</Text>
            </View>
            <View style={{borderBottomWidth: 1, borderTopWidth: 1, alignItems: 'center',
                    borderColor: '#A39E9E', top: 320, width: '50%', height: 85, justifyContent: 'center'}}>
                <AntDesign name="message1" size={35} color={'black'} disabled={true}
                onPress={() =>
                    Linking.openURL(`sms:${getSMSDivider()}body=${emailMessage}`)
                  }
                />
                <Text style={{paddingTop: 5}}>Text</Text>
            </View>
        </View> */}
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
  select: {
    padding: 10,
    width: 350,
    margin: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    backgroundColor: '#208B3A',
    top: 320,
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 5
  },
  // description: {
  //   top: 320,
  //   width: 295,
  //   paddingVertical: 20,
  //   paddingHorizontal: 20,
  //   alignSelf: 'center',
  //   borderWidth: StyleSheet.hairlineWidth,
  //   borderColor: 'grey',
  //   backgroundColor: '#f9f9f9',
  //   justifyContent: 'center',
  //   elevation: 5
  // },
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
  fundChange: {
    backgroundColor: '#208B3A',
    borderRadius: 5,
    paddingVertical: 5,
    margin: 10,
    paddingHorizontal: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  coin: {
    height: 24,
    width: 15.5,
  },
  text: {
    fontSize: 24,
    fontWeight: 500,
    // borderWidth: 1,
    // borderColor: '#B7EFC5',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    // color: '#10451D',
    margin: 5,
    // backgroundColor: '#D9D9D980',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    width: 350,
    elevation: 5
  }
});

export default BuyGift;
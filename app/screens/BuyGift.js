import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import giftCard from '../../assets/giftCard.png'
import Checkbox from 'expo-checkbox';
import coin from '../../assets/coin.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

AntDesign.loadFont();

let pointsTotal = 200.0
// need to add proper algorithm for calcuting pressh points

const BuyGift = ( {navigation} ) => {
  const [inputValue, setInputValue] = useState('0');
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView>
      <Text style={buyGiftStyle.title}>How it works</Text>
      <AntDesign style={buyGiftStyle.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                    navigation.navigate('HomeMain', {})
                  }
        />
      <Image source={giftCard} style={buyGiftStyle.giftCard}/>
      <View style={buyGiftStyle.amount}>
        <Text style={buyGiftStyle.text}>Card Amount: $
          <Text style={{fontSize: 24, fontWeight: 600}}>{inputValue} </Text>
        </Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity
          style={buyGiftStyle.fundChange}
          onPress={() =>
            setInputValue(String(Number(inputValue) + 5))
          }
          >
            <Text style={{fontSize: 22}}> + $5</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={buyGiftStyle.fundChange}
          onPress={() =>
            setInputValue(inputValue > 0 ? String(Number(inputValue) - 5): 0)
          }
          >
            <Text style={{fontSize: 22}}> - $5</Text>
          </TouchableOpacity>
        </View>
        <View style={[buyGiftStyle.text, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={{fontSize: 24, fontWeight: 500}}>Preesh </Text>
          <Image source={coin} style={buyGiftStyle.coin}/>
          <Text style={{fontSize: 24, fontWeight: 500}}> :</Text>
          <Text style={{color: '#208B3A', fontSize: 24, fontWeight: 600}}> {inputValue *5} </Text>
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
      
    </SafeAreaView>
  );
};

const buyGiftStyle = StyleSheet.create({
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
    width: 298.062,
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
    margin: 5,
    paddingHorizontal: 10,
  },
  coin: {
    height: 28,
    width: 18,
  },
  text: {
    fontSize: 24,
    fontWeight: 500,
    borderWidth: 3,
    padding: 7,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderColor: '#208B3A',
    color: '#10451D',
    margin: 5,
  }
});

export default BuyGift;
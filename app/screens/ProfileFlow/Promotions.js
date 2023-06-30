import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable, Linking, Button, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import Popup from './PromoPopup';
import Feather from 'react-native-vector-icons/Feather';

AntDesign.loadFont();
MaterialIcons.loadFont();
Feather.loadFont();

const code = "6132 7279 5118 3797"
const promos = [
    {
      title: 'Earn 20, get 20',
      detail: 'Earn 20 Preesh Points by May 31 and receive 20 additional preesh points for free!',
      buttonText: 'Claim',
      index: 0,
      code: "6132 7279 5118 3797"
    },
    {
      title: '30% Off',
      detail: 'Get 30% off your next purchase at any Preesh partner!',
      buttonText: 'Claim',
      index: 1,
      code: "6132 7279 5118 3797"
    },
    {
      title: '30% Off',
      detail: 'Get 30% off your next purchase at any Preesh partner!',
      buttonText: 'Claim',
      index: 2,
      code: "6132 7279 5118 3797"
    },
  ];

// Need to get list of promos with start and end dates
const Promotions = ( {navigation} ) => {
    const [pressed, setPressed] = useState({0: 0, 1: 0, 2: 0});  
    const [promoPop, setPromoPop] = useState(null)

    const setButton = (index) => {
        if (!pressed[index]) {
            setPressed({ ...pressed, [index]: !pressed[index] });
            // add actions adding this to saved promotions to use
        } 
    }

  return (
    <SafeAreaView>
        {promoPop ? <Popup argument={promoPop}/>: null}
        {promoPop ?
      <Feather
      onPress={() =>
        setPromoPop(null)
      }
      style={{top: 125, left: 330, position: 'absolute'}} color={'#10451D'} name="x" size={30}/> : null}
        <Text style={promoStyles.title}>Promotions</Text>
        <AntDesign style={promoStyles.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                    navigation.navigate('Profile', {})
                  }
        />

    {!promoPop ?
        <ScrollView style={{paddingBottom: 100, top: 80}}>
        
        {promos.map((promotion) => (
    <View key={promotion.index} style={promoStyles.select}>
      <Text style={promoStyles.promoTitle}>{promotion.title}</Text>
      <Text style={promoStyles.promoDetail}>{promotion.detail}</Text>
      <Button
        onPress={() => setButton(promotion.index)}
        color={pressed[promotion.index] ? 'white' : null}
        title={pressed[promotion.index] ? 'Claimed' : promotion.buttonText}
      />
      {pressed[promotion.index] ? (
        <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={() => setPromoPop(promotion)}
        >
          <MaterialIcons name="qr-code" size={32} style={{ alignSelf: 'center' }} color={'#208B3A'} />
          <Text style={{ fontWeight: 600 }}>Scan to use this promotion</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  ))}
    <View style={{height:100}}></View>
    </ScrollView> : null}
    </SafeAreaView>
  );
};

const promoStyles = StyleSheet.create({
    backArrow: {
        left: 29,
        top: 80,
        position: 'absolute',
        height: 24
    },
    select: {
        padding: 40,
        margin: 8,
        borderWidth: 2,
        borderColor: '#208B3A',
        backgroundColor: '#B7EFC5',
        borderStyle: 'dotted',
        alignSelf: 'center'
    },
    title: {
        fontWeight: 600,
        fontSize: 18,
        top: 80,
        position: 'absolute',
        alignSelf: 'center'
    },
    promoTitle: {
        fontSize: 22,
        color: '#404040',
        fontWeight: 600
    },
    promoDetail: {
        fontSize: 15,
        color: '#404040',
        paddingTop: 10
    },
    redeem: {
        backgroundColor: '#208B3A',
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        width: 76,
        height: 25,
        paddingVertical: 8,
        paddingHorizontal: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
      }
});

export default Promotions;
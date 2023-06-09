
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

AntDesign.loadFont();
MaterialCommunityIcons.loadFont()
const codeLength = 10

const Browse = ( {navigation} ) => {
    const handleButton = () => {
        // Add money to card
        navigation.goBack(null);
    };
  return (
    <SafeAreaView>
      <Text style={buyGiftStyle.title}>Redeem a Gift<Text> </Text>
      <MaterialCommunityIcons name="gift" size={24} color={'black'}/>
      </Text>
      <AntDesign style={buyGiftStyle.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                  navigation.goBack(null)
                  }
        />
        <Text style={{top: 100, alignSelf: 'center', fontSize: 18}}>Enter you code below</Text>
        <View style={{top: 110, borderWidth: 1, borderRadius: 5, height: 40, width: 330, alignSelf: 'center'}}>
            <TextInput style={{fontSize: 28, letterSpacing: 10, textAlign: 'center'}} maxLength={10}></TextInput>
            <View style={{top: 10}}>
                <Button 
                title='Redeem'
                color={'#2DC653'}
                onPress={() =>
                    handleButton()
                }
                ></Button>
            </View>
        </View>
        
    </SafeAreaView>
  );
};

const buyGiftStyle = StyleSheet.create({
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
  });

export default Browse;
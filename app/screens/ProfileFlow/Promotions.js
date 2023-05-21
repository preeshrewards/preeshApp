import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable, Linking, Button, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

AntDesign.loadFont();
MaterialIcons.loadFont();

// Need to get list of promos with start and end dates

const Promotions = ( {navigation} ) => {
    const [pressed, setPressed] = useState({0: 0, 1: 0});  
    let pressedList = [0, 0];
    const setButton0 = ( ) => {
        if (!pressed[0]) {
            setPressed({ ...pressed, 0: !pressed[0] });
            console.log(pressed)
            // add actions adding this to saved promitions to use
        } 
    }
    const setButton1 = ( ) => {
        if (!pressed[1]) {
            setPressed({ ...pressed, 1: !pressed[1] });
            console.log(pressed)
            // add actions adding this to saved promitions to use
        } 
    }
  return (
    // <SafeAreaView>
        <ScrollView style={{paddingBottom: 100}}>
        <Text style={promoStyles.title}>Promotions</Text>
        <AntDesign style={promoStyles.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                    navigation.navigate('Profile', {})
                  }
        />
        <View style={promoStyles.select}>
            <Text style={promoStyles.promoTitle}>Earn 20, get 20</Text>
            <Text style={promoStyles.promoDetail}>Earn 20 Preesh Points by May 31 and
                                                receive 20 additional preesh points for free!</Text>
                <Button 
                onPress={() =>
                    setButton0()
                  }
                 color={pressed[0] ? 'white' : null} title={pressed[0] ? 'Claimed' : 'Claim'}></Button>
                 {pressed[0] ?
                 <TouchableOpacity>
                    <MaterialIcons name="qr-code" size={32} style={{alignSelf: 'center'}} color={'#208B3A'} />
                 </TouchableOpacity> : null}
        </View>
        <View style={promoStyles.select}>
        <Text style={promoStyles.promoTitle}>30% Off</Text>
            <Text style={promoStyles.promoDetail}>Get 30% off your next purchase at any Preesh partner!</Text>
                <Button 
                onPress={() =>
                    setButton1()
                  }
                  
                 color={pressed[1] ? 'white' : null} title={pressed[1] ? 'Claimed' : 'Claim'}></Button>
                 {pressed[1] ?
                 <TouchableOpacity>
                    <MaterialIcons name="qr-code" size={32} style={{alignSelf: 'center'}} color={'#208B3A'} />
                 </TouchableOpacity> : null}
        </View>
        <View style={promoStyles.select}>
        <Text style={promoStyles.promoTitle}>30% Off</Text>
            <Text style={promoStyles.promoDetail}>Get 30% off your next purchase at any Preesh partner!</Text>
                <Button 
                onPress={() =>
                    setButton1()
                  }
                  
                 color={pressed[1] ? 'white' : null} title={pressed[1] ? 'Claimed' : 'Claim'}></Button>
                 {pressed[1] ?
                 <TouchableOpacity>
                    <MaterialIcons name="qr-code" size={32} style={{alignSelf: 'center'}} color={'#208B3A'} />
                 </TouchableOpacity> : null}
        </View>
        <View style={{height:200}}></View>
        </ScrollView>
    // {/* </SafeAreaView> */}
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
        top: 125,
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
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import restaurantImagePlaceholder from '../../../assets/restaurantImagePlaceholder.png'
import coin from '../../../assets/coin.png'
// import RewardUsed from '../../Models/User'


AntDesign.loadFont();

class RewardUsed {
    points = 0
    picture = ""
    date = Date()
    rewardDescription = ""
    restaurantName = ""
  
    constructor(points, picture, date, rewardDescription, restaurantName) {
      this.points = points;
      this.picture = picture;
      this.date = date;
      this.rewardDescription = rewardDescription
      this.restaurantName = restaurantName
    }
    
    // constructor() {}
  };
  
const r = new RewardUsed(10, restaurantImagePlaceholder, new Date(), "Buy 1 get 1 free", "Taco Bell");
const rewards = [new RewardUsed(10, restaurantImagePlaceholder, new Date().toLocaleDateString(), "Buy 1 get 1 free", "Taco Bell"),
                new RewardUsed(10, restaurantImagePlaceholder, new Date().toLocaleDateString(), "Buy 1 get 1 free", "Taco Bell"),
                new RewardUsed(10, restaurantImagePlaceholder, new Date().toLocaleDateString(), "Buy 1 get 1 free", "Taco Bell"),
                new RewardUsed(10, restaurantImagePlaceholder, new Date().toLocaleDateString(), "Buy 1 get 1 free", "Taco Bell"),
                new RewardUsed(10, restaurantImagePlaceholder, new Date().toLocaleDateString(), "Buy 1 get 1 free", "Taco Bell"),
                new RewardUsed(10, restaurantImagePlaceholder, new Date().toLocaleDateString(), "Buy 1 get 1 free", "Taco Bell")];
// const rewards = []

const History = ( {navigation} ) => {    
  return (
    <SafeAreaView>
        <Text style={historyStyles.title}>Past Rewards Used</Text>
        <AntDesign style={historyStyles.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                    navigation.navigate('Profile', {})
                  }
        />
        
        {rewards.length ?
        (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{top: 80}}>
        {rewards.map((reward) => {
        
         return (
            <View style={historyStyles.orders}>
                <Image source={reward.picture} style={historyStyles.picture}/>
                <View style={{flexDirection: 'column', left:100, gap: 5}}>
                    <Text style={{fontWeight: 600, fontSize: 15}}>{reward.restaurantName}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 700, fontSize: 14, color: '#208B3A'}}>{reward.points} Preesh </Text>
                        <Image source={coin} style={historyStyles.coin}/>
                    </View>
                    <Text>"{reward.rewardDescription}"</Text>
                    <Text>{reward.date}</Text>
                </View>
            </View>
         );
      })}
      <View style={{height:200}}></View>
      </ScrollView>) : 
      (
        <View style={historyStyles.noRewardsContainer}>
            <Text style={historyStyles.noneUsedYet}>None Used Yet</Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={historyStyles.goEarn}>Go earn some Preesh </Text>
                <Image source={coin} style={historyStyles.coin}/>
                <Text style={historyStyles.goEarn}> and reward yourself!</Text>
            </View>
            <Text style={historyStyles.explanation}>To use a reward, just provide the reward's barcode to the cashier before payment.</Text>
        </View>
      )}
 </SafeAreaView>
  );
};

const historyStyles = StyleSheet.create({
    backArrow: {
        left: 29,
        top: 80,
        position: 'absolute',
        height: 24,
    },
    title: {
        fontWeight: 600,
        fontSize: 18,
        top: 80,
        position: 'absolute',
        alignSelf: 'center'
    },
    orders: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        margin: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
        backgroundColor: '#f9f9f9',
        justifyContent: 'center'
    },
    picture: {
        height: 80,
        width: 120,
        position: 'absolute',
        left: 10,
    },
    coin: {
        height: 19,
        width: 12,
      },
    goEarn: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 400,
        color: '#155D27'
    },
    explanation: {
        paddingTop: 15,
        width: 320,
        textAlign:"center",
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 400,
        color: 'black'
    },
    noneUsedYet: {
        alignSelf: 'center', fontSize: 18, fontWeight: 600, paddingBottom: 15, color: 'black'
    },
    noRewardsContainer: {
        margin: 10, padding: 35, top: 80, borderWidth: 1, backgroundColor: '#f9f9f9', borderColor: 'white'
    }
});

export default History;
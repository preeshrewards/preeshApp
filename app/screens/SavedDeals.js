import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import restaurantImagePlaceholder from '../../assets/restaurantImagePlaceholder.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

AntDesign.loadFont();
MaterialIcons.loadFont();

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

const rewards1 = [new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell")];
// const rewards = []
const rewards2 = [new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell")];


const SavedDeals = ( {navigation} ) => {
  return (
    <SafeAreaView>
      <Text style={savedDealsStyles.title}>Saved Deals</Text>
        <AntDesign style={savedDealsStyles.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                    navigation.goBack(null)
                  }
        />

      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={savedDealsStyles.dealsContainer}>
        <View style={{flexDirection: 'row', gap: 30}}>
        <View style={{width:140}}>
          {rewards1.map((reward) => {
          return (
            <View style={savedDealsStyles.dealView}>
              <Image source={reward.picture} style={savedDealsStyles.picture}/>
              <View style={{flexDirection: 'row', gap: 20}}>
                <View>
                  <Text style={{fontWeight: 400, fontSize: 15}}>{reward.restaurantName}</Text>
                  <Text style={{fontWeight: 400, fontSize: 13, color: '#155D27'}}>{reward.rewardDescription}</Text>
                </View>
                  <MaterialIcons name="qr-code" size={24} style={{top: 0}}
                  onPress={() =>
                    console.log("Pressed")
                  }/>
              </View>
            </View>
          );
        })}
        <View style={{height:100}}></View>
      </View>
      <View style={{width:140}}>
      {rewards2.map((reward) => {
         return (
          <View style={savedDealsStyles.dealView}>
            <Image source={reward.picture} style={savedDealsStyles.picture}/>
            <View style={{flexDirection: 'row', gap: 20}}>
                <View>
                  <Text style={{fontWeight: 400, fontSize: 15}}>{reward.restaurantName}</Text>
                  <Text style={{fontWeight: 400, fontSize: 13, color: '#155D27'}}>{reward.rewardDescription}</Text>
                </View>
                  <MaterialIcons name="qr-code" size={24} style={{top: 0}}/>
              </View>
            </View>
         );
      })}
      </View>
      </View>
      <View style={{height:100}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const savedDealsStyles = StyleSheet.create({
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
  dealsContainer: {
      left: 40,
      width: 310,
      top: 80,
  },
  dealView: {
    height: 129,
    width: 140,
    flexDirection: 'column',
    marginBottom: 7
  },
  picture: {
    width: 140,
    height: 92
  }
});

export default SavedDeals;
import React, {useState, useRef} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import restaurantImagePlaceholder from '../../assets/restaurantImagePlaceholder.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Subway from '../../assets/Subway.png'
import Popup from './DealPopup';

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
                new SavedReward(10, Subway, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell")];
// const rewards = []
const rewards2 = [new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, Subway, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
                new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell")];


const MostPopular = ( {navigation} ) => {
  const [isBlur, setBlur] = useState(false);
  const [reward, setReward] =useState(null)
  const opacityAnimation = useRef(new Animated.Value(0.2)).current;
  const opacityStyle = { opacity: opacityAnimation };
  const animateElement = () => {

    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.ease
    }).start(() => {
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }).start()
    })
  };

  const handlePress = (reward) => {
    setBlur(true);
    setReward(reward)
  }

  return (
    <SafeAreaView>
      {isBlur ? <Popup argument={reward}/>: null}
      {isBlur ?
      <Feather
      onPress={() =>
        setBlur(false)
      }
      style={{top: 125, left: 330, position: 'absolute'}} color={'#10451D'} name="x" size={30}/> : null}
      <Text style={savedDealsStyles.title}>Most Popular Deals</Text>
        <AntDesign style={savedDealsStyles.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                  navigation.goBack(null)
                  }
        />

      <Animated.ScrollView 
      showsVerticalScrollIndicator={false}
      style={[
        savedDealsStyles.dealsContainer, 
        isBlur ? { opacity: 0.2, opacityAnimation} : null,
      ]}>
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
                    handlePress(reward)
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
                  <MaterialIcons name="qr-code" size={24} style={{top: 0}}
                  onPress={() =>
                    handlePress(reward)
                  }/>
              </View>
            </View>
         );
      })}
      </View>
      </View>
      <View style={{height:100}}></View>
      </Animated.ScrollView>
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

export default MostPopular;
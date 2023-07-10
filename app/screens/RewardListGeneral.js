import React, {useState, useRef} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import restaurantImagePlaceholder from '../../assets/restaurantImagePlaceholder.png'
import Subway from '../../assets/Subway.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Popup from './DealPopup';
import coin from '../../assets/coin.png'

AntDesign.loadFont();
MaterialIcons.loadFont();
Feather.loadFont();

const RewardListGeneral = ( {route, navigation} ) => {
    const { rewards1, rewards2, browseTitle, popularTitle, favoritesTitle, savedTitle} = route.params;
    let title = "Browse Deals";
    if (popularTitle) title = popularTitle;
    else if (favoritesTitle) title = favoritesTitle;
    else if (savedTitle) title = savedTitle;

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
    <SafeAreaView style={{width: '100%', alignItems: 'center'}}>
      {isBlur ? <Popup argument={reward}/>: null}
      {isBlur ?
      <Feather
      onPress={() =>
        setBlur(false)
      }
      style={{top: '10%', left: '85%', position: 'absolute'}} color={'#10451D'} name="x" size={30}/> : null}
      <Text style={savedDealsStyles.title}>{title}</Text>
        <AntDesign style={savedDealsStyles.backArrow} name="arrowleft" size={24} color={'black'}
                onPress={() =>
                    navigation.goBack(null)
                  }
        />
        <MaterialIcons name="filter-list" size={24} style={savedDealsStyles.filterIcon}/>
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
                  <Text style={savedDealsStyles.descriptionText}>{reward.rewardDescription}</Text>
                </View>
                  <MaterialIcons name="qr-code" size={24} style={{top: 0}}
                  onPress={() =>
                    handlePress(reward)
                  }/>
              </View>
              <View style={savedDealsStyles.points}>
                        <Text style={savedDealsStyles.pointsText}>{reward.points} Preesh </Text>
                        <Image source={coin} style={savedDealsStyles.coin}/>
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
            <View style={savedDealsStyles.points}>
                        <Text style={savedDealsStyles.pointsText}>{reward.points} Preesh </Text>
                        <Image source={coin} style={savedDealsStyles.coin}/>
              </View>
            <View style={{flexDirection: 'row', gap: 20}}>
                <View>
                  <Text style={{fontWeight: 400, fontSize: 15}}>{reward.restaurantName}</Text>
                  <Text style={savedDealsStyles.descriptionText}>{reward.rewardDescription}</Text>
                </View>
                  <MaterialIcons
                  onPress={() =>
                    handlePress(reward)
                  }
                  name="qr-code" size={24} style={{top: 0}}/>
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
  blur: {
    opacity: 0.2
  },
  backArrow: {
    left: '8%',
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
      width: 310,
      top: 80,
  },
  dealView: {
    height: 129,
    width: 140,
    flexDirection: 'column',
    marginBottom: 7
  },
  descriptionText: {
    fontWeight: 400,
    fontSize: 13,
    color: '#155D27'
  },
  points: {
    flexDirection: 'row',
    position: 'absolute',
    top: 64,
    backgroundColor: '#B7EFC5',
    padding: 4,
    borderRadius: 10,
    left: 2
  },
  pointsText: {
    fontWeight: 600,
    fontSize: 13,
    color: '#208B3A'
  },
  picture: {
    width: 140,
    height: 92
  },
  coin: {
    height: 19,
    width: 12,
  },
  filterIcon: {
    left: '75%',
    top: 80,
    position: 'absolute'
  }
});

export default RewardListGeneral;
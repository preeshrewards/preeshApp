import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button, Pressable} from 'react-native';
import { SearchBar } from "react-native-elements";
import { SafeAreaView } from 'react-native-safe-area-context';
import restaurantImagePlaceholder from '../../../assets/restaurantImagePlaceholder.png'
import Subway from '../../../assets/Subway.png'
import logo from '../../../assets/logo.png'
import { ScrollView } from 'react-native-gesture-handler';
import Popup from '../DealPopup';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import coin from '../../../assets/coin.png'
import Rewards from '../../Models/Model';

MaterialIcons.loadFont();
                
const Browse = ( {navigation} ) => {
    const browseTitle = "Browse Places";
    const popularTitle = "Most Popular";
    const favoritesTitle = "Your Favorites";
    const savedTitle = "Saved Deals"
    const rewards = new Rewards();
    const rewards1 = rewards.rewards1;
    const rewards2 = rewards.rewards2;

  return (
    <SafeAreaView >
        <Image source={logo} style={savedDealsStyles.logo}/>
        {/* Search */}
        <SearchBar
        containerStyle={{backgroundColor: 'transparent', top: 50, height: 38, alignSelf: 'center', justifyContent: 'center'}}
        inputContainerStyle={{borderRadius: 30, height: 38, width: 351, borderColor: 'transparent'}}
        placeholder="Search Here..."
        lightTheme
        round
        autoCorrect={false}
        onClick ={() =>
            navigation.navigate("Search")
        }
        style={{display: 'flex',
        justifyContent: 'center',}}
        />

        {/* Browse Places */}
        <ScrollView style={{top: 75}}>
            {/* Browse Places */}
            <View style={{top: 0}}>
                <Text style={{marginLeft: 10, fontWeight: 600, fontSize: 17}}>Browse Places</Text>
                <ScrollView horizontal={true} style={{height: 250, margin: 10}} showsHorizontalScrollIndicator={false}>
                {rewards1.map((reward) => {
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
                            <Text style={{fontWeight: 400, fontSize: 13, color: '#155D27'}}>{reward.rewardDescription}</Text>
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
                </ScrollView>
                <Pressable
                style={[savedDealsStyles.viewAll]}
                onPress={() =>
                    navigation.navigate('RewardListGeneral', {rewards1, rewards2, browseTitle})
                }
                >
                    <Text style={{color: 'white'}}>View All →</Text>
                </Pressable>
                <View style={[savedDealsStyles.line, {top: 210}]}></View>
            </View>

            
            {/* Most Popular */}
            <View style={{top: -65}}>
                <Text style={{marginLeft: 10, fontWeight: 600, fontSize: 17}}>Most Popular</Text>
                <ScrollView horizontal={true} style={{height: 250, margin: 10}} showsHorizontalScrollIndicator={false}>
                {rewards1.map((reward) => {
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
                            <Text style={{fontWeight: 400, fontSize: 13, color: '#155D27'}}>{reward.rewardDescription}</Text>
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
                </ScrollView>
                <Pressable
                style={savedDealsStyles.viewAll}
                onPress={() =>
                    navigation.navigate('RewardListGeneral', {rewards1, rewards2, popularTitle})
                }
                >
                    <Text style={{color: 'white'}}>View All →</Text>
                </Pressable>
                <View style={[savedDealsStyles.line, {top: 210}]}></View>
            </View>
            
            {/* Your Favourites */}
            <View style={{top: -130}}>
                <Text style={{marginLeft: 10, fontWeight: 600, fontSize: 17}}>Your Favorites </Text>
                <ScrollView horizontal={true} style={{height: 250, margin: 10}} showsHorizontalScrollIndicator={false}>
                {rewards1.map((reward) => {
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
                            <Text style={{fontWeight: 400, fontSize: 13, color: '#155D27'}}>{reward.rewardDescription}</Text>
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
                </ScrollView>
                <Pressable
                style={savedDealsStyles.viewAll}
                onPress={() =>
                    navigation.navigate('RewardListGeneral', {rewards1, rewards2, favoritesTitle})
                }
                >
                    <Text style={{color: 'white'}}>View All →</Text>
                </Pressable>
                <View style={[savedDealsStyles.line, {top: 210}]}></View>
            </View>

            {/* Saved Deals */}
            <View style={{top: -195}}>
                <Text style={{marginLeft: 10, fontWeight: 600, fontSize: 17}}>Saved Deals</Text>
                <ScrollView horizontal={true} style={{height: 250, margin: 10}} showsHorizontalScrollIndicator={false}>
                {rewards1.map((reward) => {
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
                            <Text style={{fontWeight: 400, fontSize: 13, color: '#155D27'}}>{reward.rewardDescription}</Text>
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
                </ScrollView>
                <Pressable
                style={savedDealsStyles.viewAll}
                onPress={() =>
                    navigation.navigate('RewardListGeneral', {rewards1, rewards2, savedTitle})
                }
                >
                    <Text style={{color: 'white'}}>View All →</Text>
                </Pressable>
                <View style={[savedDealsStyles.line, {top: 210}]}></View>
            </View>
        </ScrollView>
        

        
            
    </SafeAreaView>
  );
};

const savedDealsStyles = StyleSheet.create({
    dealView: {
        height: 129,
        width: 140,
        flexDirection: 'column',
        marginRight: 10
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
    line: {
        // borderWidth: StyleSheet.hairlineWidth,
        height: 3,
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderColor: 'rgba(0, 0, 0, 0.25)'
    },
    viewAll: {
        width: 82,
        height: 25,
        backgroundColor: '#155D27',
        position: 'absolute',
        top: 175,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        left: 293
    },
    logo: {
        width: 109,
        height: 34,
        position: 'absolute',
        left: 40,
        top: 46,
    }
});

export default Browse;
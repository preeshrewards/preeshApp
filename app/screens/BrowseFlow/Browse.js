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

                
const Browse = ( {navigation} ) => {
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

        <ScrollView style={{top: 75}}>
            {/* Browse Places */}
            <View style={{top: 0}}>
                <Text style={{marginLeft: 10, fontWeight: 600, fontSize: 17}}>Browse Places</Text>
                <ScrollView horizontal={true} style={{height: 250, margin: 10}} showsHorizontalScrollIndicator={false}>
                {rewards1.map((reward) => {
                    return (
                    <View style={savedDealsStyles.dealView}>
                        <Image source={reward.picture} style={savedDealsStyles.picture}/>
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
                    console.log('hi')
                }
                >
                    <Text style={{color: 'white'}}>View All →</Text>
                </Pressable>
                <View style={[savedDealsStyles.line, {top: 210}]}></View>
            </View>

            

            <View style={{top: -65}}>
                <Text style={{marginLeft: 10, fontWeight: 600, fontSize: 17}}>Most Popular</Text>
                <ScrollView horizontal={true} style={{height: 250, margin: 10}} showsHorizontalScrollIndicator={false}>
                {rewards1.map((reward) => {
                    return (
                    <View style={savedDealsStyles.dealView}>
                        <Image source={reward.picture} style={savedDealsStyles.picture}/>
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
                    console.log('hi')
                }
                >
                    <Text style={{color: 'white'}}>View All →</Text>
                </Pressable>
                <View style={[savedDealsStyles.line, {top: 210}]}></View>
            </View>
            
            <View style={{top: -130}}>
                <Text style={{marginLeft: 10, fontWeight: 600, fontSize: 17}}>Your Favorites </Text>
                <ScrollView horizontal={true} style={{height: 250, margin: 10}} showsHorizontalScrollIndicator={false}>
                {rewards1.map((reward) => {
                    return (
                    <View style={savedDealsStyles.dealView}>
                        <Image source={reward.picture} style={savedDealsStyles.picture}/>
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
                    console.log('hi')
                }
                >
                    <Text style={{color: 'white'}}>View All →</Text>
                </Pressable>
                <View style={[savedDealsStyles.line, {top: 210}]}></View>
            </View>

            <View style={{top: -195}}>
                <Text style={{marginLeft: 10, fontWeight: 600, fontSize: 17}}>Saved Deals</Text>
                <ScrollView horizontal={true} style={{height: 250, margin: 10}} showsHorizontalScrollIndicator={false}>
                {rewards1.map((reward) => {
                    return (
                    <View style={savedDealsStyles.dealView}>
                        <Image source={reward.picture} style={savedDealsStyles.picture}/>
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
                    console.log('hi')
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
    picture: {
        width: 140,
        height: 92
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
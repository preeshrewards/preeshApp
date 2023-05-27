import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import logo from '../../../assets/logo.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Entypo.loadFont();
AntDesign.loadFont();

let first = "Noah";
let last = "Nefsky"

const Profile = ( {navigation} ) => {
  return (
    <SafeAreaView>
        <Image source={logo} style={profileStyles.logo}/>
        <Text style={profileStyles.name}>{first + " " + last}</Text>
        <View style={profileStyles.container1}>
            <MaterialCommunityIcons style={profileStyles.icon} name="account-circle" size={85} color={'#208B3A'} />
            <TouchableOpacity
            onPress={() =>
                navigation.navigate('EditAccount', {})
              }
            ><Text style={profileStyles.edit}>Edit Account</Text></TouchableOpacity>
        </View>
        <View style={profileStyles.tabContainer}>
            <TouchableOpacity 
            onPress={() =>
                navigation.navigate('MostPopular', {})
            }
            style={profileStyles.tab1}>
            <Text style={profileStyles.tabLabel}>Most{'\n'}Popular</Text>
            <MaterialIcons style={profileStyles.tabIcon} name="favorite" size={42} color={'#208B3A'} />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() =>
                navigation.navigate('SavedDeals', {})
            }
            style={profileStyles.tab2}>
            <Text style={profileStyles.tabLabel}>Saved{'\n'}Deals</Text>
            <MaterialIcons style={profileStyles.tabIcon} name="bookmark" size={42} color={'#208B3A'} />
            </TouchableOpacity>
        </View>
        <View style={profileStyles.container2}>
            <TouchableOpacity
            onPress={() =>
                navigation.navigate('History', {})
            }
            ><Text style={profileStyles.field}>History</Text></TouchableOpacity>
            <TouchableOpacity
            onPress={() =>
                navigation.navigate('Promotions', {})
            }><Text style={profileStyles.field}>Promotions</Text></TouchableOpacity>
            <TouchableOpacity
            onPress={() =>
                navigation.navigate('BuyGift', {})
            }
            ><Text style={profileStyles.field}>Buy a Gift</Text></TouchableOpacity>
            <TouchableOpacity
            onPress={() =>
                navigation.navigate('Invite', {})
            }>
                <Text style={profileStyles.field}>Invite a Friend</Text></TouchableOpacity>
            <TouchableOpacity 
                onPress={() =>
                    navigation.navigate('About', {})
                }>
                <Text style={profileStyles.field}>About Preesh</Text>
            </TouchableOpacity>
            <View style={profileStyles.iconContainer}>
                <MaterialIcons style={profileStyles.bottomIcons} name="history" size={24} color={'#10451D'} />
                <Entypo style={profileStyles.bottomIcons} name="price-tag" size={24} color={'#10451D'} />
                <MaterialIcons style={profileStyles.bottomIcons} name="card-giftcard" size={24} color={'#10451D'} />
                <AntDesign style={profileStyles.bottomIcons} name="addusergroup" size={24} color={'#10451D'} />
                <MaterialIcons style={profileStyles.bottomIcons} name="info" size={24} color={'#10451D'} />
            </View>
        </View>
    </SafeAreaView>
  );
};

const profileStyles = StyleSheet.create({
    logo: {
        width: 109,
        height: 34,
        position: 'absolute',
        left: 40,
        top: 46,
    },
    name: {
        fontWeight: 700,
        fontSize: 17,
        position: 'absolute',
        left: 47,
        top: 106,
    },
    container1: {
        width: 85,
        height: 92,
        top: 65,
        alignItems: 'center',
        left: 257,
        position: 'absolute',
    },
    icon: {
        borderRadius: 42.5,
    },
    edit: {
        fontWeight: 600,
        fontSize: 13,
        top: -5,
        color: '#A39E9E',
    },
    tab1: {
        height: 75,
        width: 143,
        borderRadius: 30,
        borderColor: '#10451D',
        borderWidth: 0.81,
        // left: 58,
        // position: 'absolute'
      },
      tab2: {
        height: 75,
        width: 143,
        borderRadius: 30,
        borderColor: '#10451D',
        borderWidth: 0.81,
        flexDirection: 'column',
      },
      tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30.9,
        position: 'absolute',
        top: 189,
        alignSelf: 'center',
      },
      tabIcon: {
        left: 80,
        top: -18.7,
      },
      tabLabel: {
        left: 16.17,
        top: 17.79,
        fontWeight: 700,
        fontSize: 15,
        lineHeight: 16.11
      },
      container2: {
          backgroundColor: '#B7EFC5',
          width: '100%',
          height: 321,
          position: 'absolute',
          top: 306,
          gap: 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
      },
      field: {
          fontWeight: 400,
          fontSize: 17,
          color: 'black',
          paddingTop: 20,
          left: 68,
      },
      iconContainer: {
          left: 17,
          position: 'absolute',
          top: 20,
          width: 30.86,
          height: 258.2,
          gap: 30
      },
      bottomIcons: {
      }

  });

export default Profile;
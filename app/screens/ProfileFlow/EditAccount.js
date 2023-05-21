import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import placeholder from '../../../assets/placeholderimage.jpg'
import { TextInput } from 'react-native-gesture-handler';

Octicons.loadFont();
MaterialCommunityIcons.loadFont();

const EditAccount = ( {navigation} ) => {
    return (
      <SafeAreaView style={{flexDirection: 'column',}}>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile', {})
            }>
            <Octicons style={editAccountStyles.x} name="x" size={24} />
          </TouchableOpacity>
          <Text style={editAccountStyles.title}>EditAccount</Text>
        </View>
        <View style={editAccountStyles.container1}>
          <View><Image source={placeholder} style={editAccountStyles.placeholder}/>
          <MaterialCommunityIcons style={editAccountStyles.pencil} name="pencil-circle" size={24} color={'#10451D'} />
          </View>
        </View>
        <View style={editAccountStyles.container2}>
          <View style={{justifyContent: 'center', paddingVertical: 32}}>
            <View style={editAccountStyles.rect}>
              <Text style={editAccountStyles.text}>First Name</Text>
              <TextInput style={editAccountStyles.editableText}>First Name</TextInput>
            </View>
            <View style = {editAccountStyles.lineStyle}/>
            <View style={[editAccountStyles.rect]}>
              <Text style={editAccountStyles.text}>Last Name</Text>
              <TextInput style={editAccountStyles.editableText}>Last Name</TextInput>
            </View>
            <View style = {editAccountStyles.lineStyle}/>
            <View style={[editAccountStyles.rect]}>
              <Text style={editAccountStyles.text}>Phone Number</Text>
              <TextInput style={editAccountStyles.editableText}>1111111111</TextInput>
            </View>
            <View style = {editAccountStyles.lineStyle}/>
            <View style={[editAccountStyles.rect]}>
              <Text style={editAccountStyles.text}>Email</Text>
              <TextInput style={editAccountStyles.editableText}>firstlast@gmail.com</TextInput>
            </View>
            <View style = {editAccountStyles.lineStyle}/>
            <View style={[editAccountStyles.rect]}>
              <Text style={editAccountStyles.text}>Password</Text>
              <TextInput 
              style={editAccountStyles.editableText}
              // placeholder="Password"
              placeholderTextColor="black"
              // placeholder=''
              secureTextEntry={true}>password</TextInput>
            </View>
            <View style = {editAccountStyles.lineStyle}/>
            <Button 
              title="Save"
              style={{top:10}}
              onPress={console.log('Save button pressed')}>
            </Button>
          </View>
        </View>
        <View style={editAccountStyles.container3}></View>
      </SafeAreaView>
      
    );
};

const editAccountStyles = StyleSheet.create({
  lineStyle:{
    borderWidth: 0.5,
    borderColor: '#A39E9E',
    marginTop: -15,
    marginBottom: 5,
    backgroundColor: '#A39E9E'
  },
  title: {
    fontWeight: 500,
    fontSize: 17,
    left: 60,
    top: 10,
    position: 'absolute',
    lineHeight: 19.92
  },
  x: {
    left: 20,
    top: 7.96,
    position: 'absolute',
  },
  container1: {
    backgroundColor: '#B7EFC5',
    top: 93,
    height: 141,
    position: 'absolute',
    width: '100%',
    justifyContent: 'center'
  },
  placeholder: {
    width: 91,
    height: 91,
    borderRadius: '50%',
    left: 21
  },
  pencil: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  container2: {
    backgroundColor: 'white',
    top: 234,
    height: 315,
    position: 'absolute',
    width: '100%',
  },
  rect: {
    height: 60,
    left: 34,
  },
  text: {
    color: '#A39E9E',
    fontWeight: 400,
    fontSize: 13,
    top: 0
  },
  editableText: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 15,
    top: 5,
  },
  container3: {
    backgroundColor: '#B7EFC5',
    position: 'absolute',
    top: 549,
    height: 400,
    width: '100%',
  }
});

export default EditAccount;
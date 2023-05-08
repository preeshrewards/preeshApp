
import React from 'react';
import {View, Text, Button, StyleSheet, Pressable, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../../assets/logo.png'
import blur from '../../assets/blur.png'



const Login = ({navigation}) => {
  return (
    <SafeAreaView style={loginStyles.container}>
      {/* <Image source={blur} style={loginStyles.blur}/> */}
      <Image source={logo} style={loginStyles.logo}/>
      <Pressable
      onPress={() =>
        navigation.navigate('TabNavigator', {})
      }
      style={loginStyles.signIn}>
        <Text style={loginStyles.signInText}>Sign In</Text>
      </Pressable>
      <Pressable
      style={loginStyles.createAccount}>
        <Text style={loginStyles.createAccountText}>Create Account</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  signIn: {
    backgroundColor: '#10451D',
    borderRadius: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    width: 342,
    height: 50,
    position: 'absolute',
    left: 24,
    top: 366,
  },
  createAccount: {
    backgroundColor: '#fff',
    borderRadius: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    width: 342,
    height: 50,
    position: 'absolute',
    left: 24,
    top: 429,
  },
  signInText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  createAccountText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#2D2F2D',
  },
  logo: {
    width: 310.97,
    height: 97,
    position: 'absolute',
    left: 39.51,
    top: 222,
  },
  blur: {
    position: 'absolute',
    width: 344,
    height: 120, 
    left: 22,
    top: 217,
  }
});

export default Login;
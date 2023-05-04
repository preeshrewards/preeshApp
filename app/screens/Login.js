
import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView style={loginStyles.container}>
      <View
      style={loginStyles.preeshBackrgound}></View>
      <Pressable
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
  preeshBackrgound: {
    backgroundColor: rgba=(240, 240, 240, 0.95),
    position: 'absolute',
    width: 344,
    height: 120, 
    left: 22,
    top: 217,
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
});

export default Login;
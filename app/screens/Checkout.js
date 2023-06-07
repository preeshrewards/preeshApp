import React, {useState} from "react";
import { StyleSheet, View, TouchableHighlight, Text} from "react-native";
import {
  Frames,
  CardNumber,
  ExpiryDate,
  Cvv,
  SubmitButton,
} from "frames-react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

AntDesign.loadFont();
MaterialCommunityIcons.loadFont();

export default function App( {navigation} ) {
    const [isGift, setIsGift] = useState(true);
  return (
      <SafeAreaView>
    <Text style={styles.title}>Buy a Gift Card</Text>
    <AntDesign style={styles.backArrow} name="arrowleft" size={24} color={'black'}
              onPress={() =>
                navigation.goBack(null)
                }
      />
    <View style={styles.container}>
      <Frames
        config={{
          debug: true,
          publicKey: "pk_test_4296fd52-efba-4a38-b6ce-cf0d93639d8a",
        }}
        cardTokenized={(e) => {
          alert(e.token);
        }}
      >
        <CardNumber
          style={styles.cardNumber}
          placeholderTextColor="#9898A0"
          // showIcon={false} in case you don't want to see the card scheme logo
        />

        <View style={styles.dateAndCode}>
          <ExpiryDate
            style={styles.expiryDate}
            placeholderTextColor="#9898A0"
          />
          <Cvv style={styles.cvv} placeholder='Cvv' placeholderTextColor="#9898A0" />
        </View>

    {isGift ? (
        <View style={{alignItems: 'center', gap: 20, marginTop: 20, marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: 500, textAlign: 'center'}}>You will be able to send your gift after the payment is processed.</Text>
            {/* <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
                <View style={styles.sendButtons}>
                    <Text>Email</Text>
                    <MaterialCommunityIcons name="email" size={30}/>
                </View>
                <View style={styles.sendButtons}>
                    <Text>Message</Text>
                    <MaterialCommunityIcons name="email" size={30}/>
                </View>
            </View> */}
        </View>) :
        null}
        <SubmitButton
          title="Pay Now"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => console.log("merchant action")}
        />
      </Frames>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    top: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dateAndCode: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardNumber: {
    fontSize: 18,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#f9f9f9',
    borderColor: "#3A4452",
    borderRadius: 5,
  },
  sendButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#f9f9f9',
    borderColor: "#3A4452",
    borderRadius: 20,
    padding: 10
  },
  expiryDate: {
    fontSize: 18,
    height: 50,
    width: "48%",
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#f9f9f9',
    borderColor: "#3A4452",
  },
  cvv: {
    fontSize: 18,
    height: 50,
    width: "48%",
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#f9f9f9',
    borderColor: "#3A4452",
  },
  button: {
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#208B3A",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  backArrow: {
    left: 29,
    top: 80,
    position: 'absolute',
    height: 24
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
    top: 80,
    position: 'absolute',
    alignSelf: 'center'
  },
});
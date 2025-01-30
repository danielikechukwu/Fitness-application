import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { fonts } from "@/constants/fonts";
import Onboarding4 from "@/components/Buttons/onboarding4";

const fourthOnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <View>
        <Image
          source={require("../../assets/images/onboarding4.png")}
          resizeMode="cover"
          style={{ width: "auto", objectFit: "fill" }}
        />

        <View style={styles.textSection}>
          <Text style={styles.heading}>Eat well</Text>
          <Text style={styles.text}>
            Let's start a healthy lifestyle with us, we can determine your diet
            every day, healthy eating is fun
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Onboarding4 />
      </View>
    </SafeAreaView>
  );
};

export default fourthOnboardingScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },

  textSection: {
    marginTop: "13%",
    marginLeft: "5%",
    marginRight: "5%",
  },

  heading: {
    fontFamily: fonts.bold,
    fontSize: 26,
  },

  text: {
    fontFamily: fonts.regular,
    fontSize: 12,
  },

  button: {
    alignItems: "flex-end",
    marginRight: "4%",
    marginBottom: "10%"
  }

});

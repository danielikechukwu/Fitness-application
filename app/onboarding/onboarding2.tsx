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
import Onboarding2 from "@/components/Buttons/onboarding2";
import { colors } from "@/constants/colors";
import LinearGradient from "react-native-linear-gradient";

const secondOnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <View>
        <Image
          source={require("../../assets/images/onboarding2.png")}
          resizeMode="cover"
          style={{ width: "auto", objectFit: "fill" }}
        />

        <View style={styles.textSection}>
          <Text style={styles.heading}>Track Your Goal</Text>
          <Text style={styles.text}>
            Don't worry if you have trouble determining your goals, We can help
            you determine your goals and track your goals
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Onboarding2 />
      </View>
      
    </SafeAreaView>
  );
};

export default secondOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white,
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
    marginBottom: "10%",
  },

  gradientBorder: {},
});

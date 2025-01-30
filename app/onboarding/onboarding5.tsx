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
import Onboarding5 from "@/components/Buttons/onboarding2";

const secondOnboardingScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" />

      <View>
        <Image
          source={require("../../assets/images/onboarding5.png")}
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
        <Onboarding5 />
      </View>
    </SafeAreaView>
  );
};

export default secondOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    bottom: "-20%",
    alignItems: "flex-end",
    marginRight: 11,
  },
});

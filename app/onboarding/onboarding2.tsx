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
import { colors } from "@/constants/colors";
import OnboardingButton from "@/components/Buttons/onboarding-button";

const secondOnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <View>
        <Image
          source={require("../../assets/images/onboarding/onboarding2.png")}
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

      {/* Next button */}
      <View style={styles.button}>
        <View style={styles.buttonBorder}>
          <OnboardingButton path="/onboarding/onboarding3" />
        </View>
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

  buttonBorder: {
    borderWidth: 3,
    borderRadius: "50%",
    borderBottomColor: colors.white,
    borderLeftColor: colors.white,
    borderTopColor: colors.brand,
    borderRightColor: colors.white,
    padding: 5,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});

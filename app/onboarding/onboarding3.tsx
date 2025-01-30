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
import Onboarding3 from "@/components/Buttons/onboarding2";

const thirdOnboardingScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" />

      <View>
        <Image
          source={require("../../assets/images/onboarding3.png")}
          resizeMode="cover"
          style={{ width: "auto", objectFit: "fill" }}
        />

        <View style={styles.textSection}>
          <Text style={styles.heading}>Get Burn</Text>
          <Text style={styles.text}>
            Let's keep burning, to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Onboarding3 />
      </View>
    </SafeAreaView>
  );
};

export default thirdOnboardingScreen;

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

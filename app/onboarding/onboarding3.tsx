import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import fonts from "../../constants/fonts";
import colors from "../../constants/Colors";
import OnboardingButton from "../../components/Buttons/onboarding-button";

const ThirdOnboardingScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <View>
        <Image
          source={require("../../assets/images/onboarding/onboarding3.png")}
          resizeMode="cover"
          style={{ width: "auto", objectFit: "fill" }}
        />

        <View style={styles.textSection}>
          <Text style={styles.heading}>Get Burn</Text>
          <Text style={styles.text}>
            Let's keep burning, to achieve your goals, it hurts only
            temporarily, if you give up now you will be in pain forever
          </Text>
        </View>
      </View>

      {/* Next button */}
      <View style={styles.button}>
        <View style={styles.buttonBorder}>
          <OnboardingButton path="/onboarding/onboarding4" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdOnboardingScreen;

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
    borderRightColor: colors.brand,
    padding: 5,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
} as const);

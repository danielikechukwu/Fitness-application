import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";
import OnboardingButton from "../../components/Buttons/onboarding-button";
import { StatusBar } from "expo-status-bar";

const FourthOnboardingScreen: React.FC = () => {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'dark' : 'dark'} />

      <View>
        <Image
          source={require("../../assets/images/onboarding/onboarding4.png")}
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

      {/* Next button */}
      <View style={styles.button}>
        <View style={styles.buttonBorder}>
          <OnboardingButton path="/onboarding/onboarding5" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FourthOnboardingScreen;

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
    borderBottomColor: colors.brand,
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

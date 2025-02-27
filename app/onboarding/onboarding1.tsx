import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";
import Buttons from "../../components/Buttons/button";
import { StatusBar } from "expo-status-bar";

const FirstOnboardingScreen: React.FC = () => {

  const colorScheme = useColorScheme();
  const buttonTitle: string = "Get Started";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'dark' : 'dark'} />

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.brandText}>
            <Text style={styles.brand}>Fitnest</Text>
            <Text style={styles.xText}>X</Text>
          </View>

          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 14,
              color: colors.gray1,
              top: -9,
            }}
          >
            Everybody can train
          </Text>
        </View>

        <View style={styles.buttonComponent}>
          <Buttons title={buttonTitle} path="/onboarding/onboarding2" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brand,
  },

  brand: {
    fontFamily: fonts.bold,
    fontSize: 26,
  },

  brandText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },

  xText: {
    color: "white",
    fontFamily: fonts.bold,
    fontSize: 32,
  },

  buttonComponent: {
    top: 270,
    marginLeft: 30,
    marginRight: 30,
  },
} as const);

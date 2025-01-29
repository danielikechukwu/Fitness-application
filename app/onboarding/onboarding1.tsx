import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../constants/fonts";
import { colors } from "../../constants/colors";
import Buttons from "../../components/button";

const firstOnboardingScreen = () => {
  const buttonTitle: string = "Get Started";

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="white" />

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
          <Buttons title={buttonTitle} />
        </View>
      </View>

    </SafeAreaView>
  );
};

export default firstOnboardingScreen;

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
});

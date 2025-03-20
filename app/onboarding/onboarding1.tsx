import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from "react-native";
import React from "react";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";
import Buttons from "../../components/Buttons/button";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const FirstOnboardingScreen: React.FC = () => {
  const colorScheme = useColorScheme();

  const buttonTitle: string = "Get Started";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === "dark" ? "dark" : "dark"} />

      <LinearGradient
        colors={["#92A3FD", "#9DCEFF"]}
        start={[1, 0]}
        end={[0, 0]}
        style={{ borderWidth: 1, flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.text}>
            <Text style={styles.brand}>Fitnest</Text>
            <Text style={styles.x}>X</Text>
          </View>

          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 16,
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
      </LinearGradient>
    </SafeAreaView>
  );
};

export default FirstOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  brand: {
    fontFamily: fonts.bold,
    fontSize: 30,
  },

  text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },

  x: {
    color: "white",
    fontFamily: fonts.bold,
    fontSize: 34,
  },

  buttonComponent: {
    top: 285,
    marginLeft: 30,
    marginRight: 30,
  },

  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
} as const);

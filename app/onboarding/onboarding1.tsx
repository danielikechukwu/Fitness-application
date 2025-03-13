import { SafeAreaView, StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";
import Buttons from "../../components/Buttons/button";
import { StatusBar } from "expo-status-bar";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Rect,
  Stop,
  Text,
} from "react-native-svg";

const FirstOnboardingScreen: React.FC = () => {
  const colorScheme = useColorScheme();

  const buttonTitle: string = "Get Started";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === "dark" ? "dark" : "dark"} />

      <Svg
        style={{ borderWidth: 1, borderColor: "red" }}
        width="100%"
        height="100%"
      >
        {/* Define gradient */}
        <Defs>
          <LinearGradient
            id="progressGradient"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="0%"
          >
            <Stop offset="0%" stopColor="#92A3FD" />
            <Stop offset="100%" stopColor="#9DCEFF" />
          </LinearGradient>
        </Defs>

        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#progressGradient)"
        />

        <Text
          x="47%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="26"
          fontFamily={fonts.bold}
          fill={colors.black}
        >
          Fitnest
        </Text>
        <Text
          x="61.2%"
          y="49.8%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="32"
          fontFamily={fonts.bold}
          fill={colors.white}
        >
          X
        </Text>
        <Text
          x="50%"
          y="53.5%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="14"
          fontFamily={fonts.regular}
          fill={colors.gray1}
        >
          Everybody can train
        </Text>
      </Svg>
      <View style={{ top: "-12%", paddingRight: "5%", paddingLeft: "5%" }}>
        <Buttons title={buttonTitle} path="/onboarding/onboarding2" />
      </View>
    </SafeAreaView>
  );
};

export default FirstOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonComponent: {
    top: 270,
    marginLeft: 30,
    marginRight: 30,
  },
} as const);

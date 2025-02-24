import { StyleSheet, View } from "react-native";
import React from "react";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  Text,
} from "react-native-svg";
import fonts from "@/constants/fonts";
import colors from "@/constants/colors";

const CaloriesCircle = ({ caloriesCount }: { caloriesCount: number }) => {
  return (
    <Svg height={100} width={100}>
      {/* Define gradient */}
      <Defs>
        <LinearGradient id="progressGradient" x1="100%" y1="0%" x2="0%" y2="0%">
          <Stop offset="0%" stopColor="#92A3FD" />
          <Stop offset="100%" stopColor="#9DCEFF" />
        </LinearGradient>
      </Defs>

      {/* Full Circle */}
      <Circle cx={50} cy={50} r={39} fill="url(#progressGradient)" />

      {/* Centered Text */}
      <Text
        x={50}
        y={45}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="14"
        fontFamily={fonts.regular}
        fill={colors.white}
      >
        {caloriesCount ? 990 - caloriesCount : 0}
      </Text>
      <Text
        x={50}
        y={60}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="14"
        fontFamily={fonts.regular}
        fill={colors.white}
      >
        kCal left
      </Text>
    </Svg>
  );
};

export default CaloriesCircle;

const styles = StyleSheet.create({});

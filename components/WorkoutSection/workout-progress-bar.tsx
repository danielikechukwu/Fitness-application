import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Defs, Line, LinearGradient, Rect, Stop } from "react-native-svg";
import Animated, { SharedValue, useSharedValue } from "react-native-reanimated";
import colors from "@/constants/colors";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const WorkoutProgressBar = () => {

    const progress: SharedValue<number> = useSharedValue(0);

  return (
    <Svg width="130%" height={20} style={styles.progressBar}>
      {/* Define gradient */}
      <Defs>
        <LinearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#C58BF2" />
          <Stop offset="100%" stopColor="#92A3FD" />
        </LinearGradient>
      </Defs>

      {/* Background bar */}
      <Rect
        width="100%"
        height={13}
        rx={7}
        ry={7}
        fill={colors.gray3}
        x={0}
        y={0}
      />

      {/* Animated progress bar */}
      <AnimatedRect
        width="70%"
        height={13}
        rx={7}
        ry={7}
        x={0}
        y={0}
        fill="url(#progressGradient)" // Apply the gradient
      />
    </Svg>
  );
};

export default WorkoutProgressBar;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  progressBar: {
    borderRadius: 10,
    overflow: "hidden",
  },
} as const);

import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Svg, { Rect } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import { colors } from "@/constants/colors";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const WaterIntakeGraph = ({ waterIntake }: { waterIntake: number }) => {

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(waterIntake / 3000, { duration: 1000 }); // Assuming 3000ml is the goal
  }, [waterIntake]);

  const animatedProps = useAnimatedProps(() => {
    const height = interpolate(progress.value, [0, 1], [0, 100]);
    const y = interpolate(progress.value, [0, 1], [100, 0]);
    return { height, y };
  });

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg viewBox="0 36 50 100">
        {/* Background */}
        <Rect x="5" y="0" width="25" height="750" fill="lightgray" rx="10" />

        {/* Animated Water Level */}
        <AnimatedRect
          x="5"
          y='0'
          width="18"
          height="450"
          fill={colors.brand}
          rx="10"
          animatedProps={animatedProps}
        />
      </Svg>
      {/* <Text style={{ position: "absolute", top: 160, fontSize: 18, fontWeight: "bold" }}>
        {waterIntake} ml
      </Text> */}
    </View>
  );
};

export default WaterIntakeGraph;

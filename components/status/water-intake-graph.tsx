import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import colors from "../../constants/colors";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const WaterIntakeGraph: React.FC<{ waterIntake: number }> = ({
  waterIntake,
}: {
  waterIntake: number;
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(waterIntake / 3000, { duration: 1000 }); // Assuming 3000ml is the goal
  }, [waterIntake]);

  const animatedProps = useAnimatedProps(() => {
    const height = interpolate(progress.value, [0, 1], [0, 370]); // Full height
    const y = interpolate(progress.value, [0, 1], [20 + 370, 20]); // Starts at bottom
    return { height, y };
  });

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg viewBox="0 20 50 45" height={400} width={50}>

        {/* Define gradient */}
        <Defs>
          <LinearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#C58BF2" />
            <Stop offset="100%" stopColor="#92A3FD" />
          </LinearGradient>
        </Defs>

        {/* Background */}
        <Rect
          x="5"
          y="20"
          width="35"
          height="370"
          fill={colors.gray3}
          rx="20"
        />

        {/* Animated Water Level */}
        <AnimatedRect
          x="5"
          width="35"
          fill="url(#progressGradient)" // Apply the gradient
          rx="20"
          animatedProps={animatedProps}
        />
      </Svg>
      {/*<Text style={{ position: "absolute", top: 160, fontSize: 18, fontWeight: "bold" }}>
        {waterIntake} ml
      </Text> */}
    </View>
  );
};

export default WaterIntakeGraph;

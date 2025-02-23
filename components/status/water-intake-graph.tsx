import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <Svg height={400} width={50}>
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

        {/* Background bar */}
        <Rect
          width={35}
          height="370"
          rx={20}
          ry={20}
          fill={colors.gray3}
          x={0}
          y={19}
        />

        {/* Animated bar */}
        <AnimatedRect
          width={35}
          rx={20}
          ry={20}
          fill="url(#progressGradient)"
          x={0}
          y={0}
          animatedProps={animatedProps}
        />
      </Svg>
    </View>
  );
};

export default WaterIntakeGraph;

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
});

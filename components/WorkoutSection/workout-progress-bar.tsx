import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Svg, { Defs, Line, LinearGradient, Rect, Stop } from "react-native-svg";
import Animated, {
  SharedValue,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import colors from "@/constants/colors";
import IWorkout from "@/types/workout";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const WorkoutProgressBar: React.FC<IWorkout> = (props: IWorkout) => {
  const progress = useSharedValue(0); // Shared value for animation

  // Calculate the percentage of calories burnt
  const progressPercentage =
    (props.burntCalories! / props.totalCalories!) * 100;

  useEffect(() => {
    progress.value = withTiming(progressPercentage, { duration: 1000 });
  }, [props.burntCalories]);

  // Animate width of the progress bar.
  const animatedProps = useAnimatedProps(() => ({
    width: `${progress.value}%`,
  }));

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
        height={13}
        rx={7}
        ry={7}
        x={0}
        y={0}
        fill="url(#progressGradient)" // Apply the gradient
        animatedProps={animatedProps}
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

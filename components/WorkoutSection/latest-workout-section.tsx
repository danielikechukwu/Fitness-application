import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import WorkoutCard from "./workout-card";
import IWorkout from "../../types/workout";

const LatestWorkoutSection: React.FC = () => {
  const workouts: IWorkout[] = [
    {
      workouts: "Fullbody Workout",
      totalCalories: 0,
      burntCalories: 180,
      imagePath: "",
      time: 20,
    },
    {
      workouts: "Lowerbody Workout",
      totalCalories: 0,
      burntCalories: 200,
      imagePath: "",
      time: 30,
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.black,
            fontFamily: fonts.bold,
            fontSize: 18,
          }}
        >
          Latest Workout
        </Text>
        <Text
          style={{
            fontFamily: fonts.regular,
            fontSize: 14,
            color: colors.gray1,
          }}
        >
          See more
        </Text>
      </View>

      <View>{/* <WorkoutCard /> */}</View>
    </View>
  );
};

export default LatestWorkoutSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
} as const);

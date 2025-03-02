import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import WorkoutCard from "./workout-card";
import IWorkout from "../../types/workout";

const LatestWorkoutSection: React.FC = () => {
  const workouts: IWorkout[] = [
    {
      workouts: "Fullbody Workout",
      totalCalories: 900,
      burntCalories: 580,
      imagePath: require("../../assets/images/dashboard/first-workout-pic.png"),
      time: 20,
    },
    {
      workouts: "Lowerbody Workout",
      totalCalories: 900,
      burntCalories: 300,
      imagePath: require("../../assets/images/dashboard/second-workout-pic.png"),
      time: 30,
    },
    {
      workouts: "ABS Workout",
      totalCalories: 900,
      burntCalories: 700,
      imagePath: require("../../assets/images/dashboard/third-workout-pic.png"),
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
            marginLeft: "3%",
          }}
        >
          Latest Workout
        </Text>
        <Text
          style={{
            fontFamily: fonts.regular,
            fontSize: 14,
            color: colors.gray1,
            marginRight: "3%",
          }}
        >
          See more
        </Text>
      </View>

      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          style={{ maxHeight: 250 }}
        >
          <View>
            {workouts.map((items: IWorkout, index: number) => (
              <View key={index} style={styles.workout}>
                <WorkoutCard
                  workouts={items.workouts}
                  imagePath={items.imagePath}
                  time={items.time}
                  totalCalories={items.totalCalories}
                  burntCalories={items.burntCalories}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LatestWorkoutSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  workout: {
    marginBottom: '2%',
    marginTop: '2%',
    marginRight: "3%",
    marginLeft: "3%",
    backgroundColor: colors.white,
  },
} as const);

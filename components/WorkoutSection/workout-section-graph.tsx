import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewBase,
  Image,
} from "react-native";
import React from "react";
import { LineChart, yAxisSides } from "react-native-gifted-charts";
import colors from "@/constants/colors";
import IWorkout from "@/types/workout";
import WorkoutProgressBar from "./workout-progress-bar";
import WorkoutGraphProgressBar from "./workout-graph-progress-bar";
import fonts from "@/constants/fonts";

const WorkoutSectionGraph = () => {
  const data1 = [
    { value: 70 },
    { value: 36 },
    { value: 50 },
    { value: 40 },
    { value: 18 },
    { value: 38 },
    { value: 18 },
    { value: 70 },
    { value: 36 },
    { value: 50 },
    { value: 40 },
    { value: 18 },
    { value: 38 },
    { value: 18 },
  ];

  const data2 = [
    { value: 50 },
    { value: 10 },
    { value: 45 },
    { value: 30 },
    { value: 45 },
    { value: 18 },
    { value: 45 },
    { value: 50 },
    { value: 10 },
    { value: 45 },
    { value: 30 },
    { value: 45 },
    { value: 18 },
    { value: 45 },
  ];

  const workouts: IWorkout = {
    workouts: "Fullbody Workout",
    totalCalories: 900,
    burntCalories: 580,
    imagePath: require("../../assets/images/dashboard/first-workout-pic.png"),
    time: 20,
  };

  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderWidth: 1,
      }}
    >
      <LineChart
        areaChart
        curved
        data={data1}
        data2={data2}
        hideDataPoints
        width={315}
        thickness1={2}
        thickness2={4}
        spacing={68}
        maxValue={100}
        color1={colors.secondary}
        color2={colors.brand}
        startFillColor1={colors.white}
        startFillColor2={colors.white}
        endFillColor1={colors.white}
        endFillColor2={colors.white}
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={5}
        yAxisColor="black"
        yAxisThickness={0}
        yAxisSide={yAxisSides.RIGHT}
        rulesType="solid"
        rulesColor="gray"
        yAxisTextStyle={{ color: colors.black }}
        yAxisLabelSuffix="%"
        xAxisColor="lightgray"
        pointerConfig={{
          pointerStripUptoDataPoint: true,
          pointerStripColor: "lightgray",
          pointerStripWidth: 2,
          strokeDashArray: [2, 5],
          radius: 0,
          pointerColor: "lightgray",
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          pointerLabelComponent: (items: any) => {
            return (
              <View style={styles.pointerLabel}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginRight: "10%",
                    marginTop: "5%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color: colors.gray1,
                      fontSize: 12,
                    }}
                  >
                    Fri, 28 May
                  </Text>
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color: "#42D742",
                      fontSize: 12,
                      marginRight: "2%",
                    }}
                  >
                    90%
                    <Image
                      tintColor="red"
                      source={require("../../assets/images/icons/arrow-up.png")}
                      style={{
                        height: 9,
                        width: 9,
                      }}
                    />
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: "3%",
                    marginRight: "10%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color: colors.gray1,
                      fontSize: 14,
                    }}
                  >
                    Upperbody Workout
                  </Text>
                  <View style={{ marginTop: "4%" }}>
                    <WorkoutGraphProgressBar
                      burntCalories={workouts.burntCalories}
                      totalCalories={workouts.totalCalories}
                    />
                  </View>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default WorkoutSectionGraph;

const styles = StyleSheet.create({
  pointerLabel: {
    height: 80,
    width: 180,
    backgroundColor: colors.white,
    borderRadius: 4,
    justifyContent: "center",
    paddingLeft: 16,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 15,
      },
    }),
  },
});

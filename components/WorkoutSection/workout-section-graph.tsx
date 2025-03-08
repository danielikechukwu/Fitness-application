import { Platform, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import {
  LineChart,
  lineDataItem,
  yAxisSides,
} from "react-native-gifted-charts";
import colors from "../../constants/colors";
import IWorkout from "../../types/workout";
import WorkoutGraphProgressBar from "./workout-graph-progress-bar";
import fonts from "../../constants/fonts";
import { GraphContext, useGraph } from "@/context/graph-context";
// import { useGraph } from "../../context/graph-context";

const WorkoutSectionGraph: React.FC = () => {
  const weeklyData1: lineDataItem[] = [
    { value: 70, label: "Mon" },
    { value: 36, label: "Tue" },
    { value: 50, label: "Wed" },
    { value: 40, label: "Thur" },
    { value: 18, label: "Fri" },
    { value: 38, label: "Sat" },
    { value: 18, label: "Sun" },
  ];

  const weeklyData2: lineDataItem[] = [
    { value: 50 },
    { value: 10 },
    { value: 45 },
    { value: 30 },
    { value: 45 },
    { value: 18 },
    { value: 58 },
  ];

  const monthlyData1: lineDataItem[] = [
    { value: 70, label: "Jan" },
    { value: 36, label: "Feb" },
    { value: 50, label: "Mar" },
    { value: 40, label: "Apr" },
    { value: 18, label: "May" },
    { value: 38, label: "Jun" },
    { value: 18, label: "Jul" },
    { value: 70, label: "Aug" },
    { value: 36, label: "Sep" },
    { value: 50, label: "Oct" },
    { value: 40, label: "Nov" },
    { value: 18, label: "Dec" },
  ];

  const monthlyData2: lineDataItem[] = [
    { value: 20 },
    { value: 16 },
    { value: 50 },
    { value: 90 },
    { value: 8 },
    { value: 68 },
    { value: 18 },
    { value: 80 },
    { value: 36 },
    { value: 30 },
    { value: 40 },
    { value: 88 },
  ];

  const yearlyData1: lineDataItem[] = [
    { value: 70, label: "2021" },
    { value: 36, label: "2022" },
    { value: 50, label: "2023" },
    { value: 40, label: "2024" },
    { value: 18, label: "2025" },
    { value: 38, label: "2026" },
  ];

  const yearlyData2: lineDataItem[] = [
    { value: 70, label: "2021" },
    { value: 6, label: "2022" },
    { value: 20, label: "2023" },
    { value: 40, label: "2024" },
    { value: 88, label: "2025" },
    { value: 48, label: "2026" },
  ];

  const workouts: IWorkout = {
    workouts: "Fullbody Workout",
    totalCalories: 900,
    burntCalories: 580,
    imagePath: require("../../assets/images/dashboard/first-workout-pic.png"),
    time: 20,
  };

  const  graph = useGraph();

  const renderGraph = () => {
    switch (graph?.workoutGraph) {
      case "1":
        return (
          <View
            style={{
              backgroundColor: colors.white,
            }}
          >
            <LineChart
              areaChart
              curved
              data2={weeklyData2}
              data={weeklyData1}
              hideDataPoints
              width={315}
              thickness1={4}
              thickness2={2}
              spacing={50}
              maxValue={100}
              color1={colors.brand}
              color2={colors.gray3}
              startFillColor1={colors.white}
              startFillColor2={colors.white}
              endFillColor1={colors.white}
              endFillColor2={colors.white}
              startOpacity={0.9}
              endOpacity={0.2}
              initialSpacing={25}
              noOfSections={5}
              yAxisColor="black"
              yAxisThickness={0}
              yAxisSide={yAxisSides.RIGHT}
              xAxisColor={colors.gray2}
              rulesType="solid"
              rulesColor={colors.gray2}
              yAxisTextStyle={{ color: colors.black }}
              yAxisLabelSuffix="%"
              xAxisLabelTextStyle={{ color: colors.gray1 }}
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
      case "2":
        return (
          <View
            style={{
              backgroundColor: colors.white,
            }}
          >
            <LineChart
              areaChart
              curved
              data2={monthlyData2}
              data={monthlyData1}
              hideDataPoints
              width={315}
              thickness1={4}
              thickness2={2}
              spacing={50}
              maxValue={100}
              color1={colors.brand}
              color2={colors.gray3}
              startFillColor1={colors.white}
              startFillColor2={colors.white}
              endFillColor1={colors.white}
              endFillColor2={colors.white}
              startOpacity={0.9}
              endOpacity={0.2}
              initialSpacing={25}
              noOfSections={5}
              yAxisColor="black"
              yAxisThickness={0}
              yAxisSide={yAxisSides.RIGHT}
              xAxisColor={colors.gray2}
              rulesType="solid"
              rulesColor={colors.gray2}
              yAxisTextStyle={{ color: colors.black }}
              yAxisLabelSuffix="%"
              xAxisLabelTextStyle={{ color: colors.gray1 }}
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
      case "3":
        return (
          <View
            style={{
              backgroundColor: colors.white,
            }}
          >
            <LineChart
              areaChart
              curved
              data2={yearlyData2}
              data={yearlyData1}
              hideDataPoints
              width={315}
              thickness1={4}
              thickness2={2}
              spacing={50}
              maxValue={100}
              color1={colors.brand}
              color2={colors.gray3}
              startFillColor1={colors.white}
              startFillColor2={colors.white}
              endFillColor1={colors.white}
              endFillColor2={colors.white}
              startOpacity={0.9}
              endOpacity={0.2}
              initialSpacing={25}
              noOfSections={5}
              yAxisColor="black"
              yAxisThickness={0}
              yAxisSide={yAxisSides.RIGHT}
              xAxisColor={colors.gray2}
              rulesType="solid"
              rulesColor={colors.gray2}
              yAxisTextStyle={{ color: colors.black }}
              yAxisLabelSuffix="%"
              xAxisLabelTextStyle={{ color: colors.gray1 }}
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
      default:
        return (
          <View
            style={{
              backgroundColor: colors.white,
            }}
          >
            <LineChart
              areaChart
              curved
              data2={weeklyData2}
              data={weeklyData1}
              hideDataPoints
              width={315}
              thickness1={4}
              thickness2={2}
              spacing={50}
              maxValue={100}
              color1={colors.brand}
              color2={colors.gray3}
              startFillColor1={colors.white}
              startFillColor2={colors.white}
              endFillColor1={colors.white}
              endFillColor2={colors.white}
              startOpacity={0.9}
              endOpacity={0.2}
              initialSpacing={25}
              noOfSections={5}
              yAxisColor="black"
              yAxisThickness={0}
              yAxisSide={yAxisSides.RIGHT}
              xAxisColor={colors.gray2}
              rulesType="solid"
              rulesColor={colors.gray2}
              yAxisTextStyle={{ color: colors.black }}
              yAxisLabelSuffix="%"
              xAxisLabelTextStyle={{ color: colors.gray1 }}
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
    }
  };

  return <View>{renderGraph()}</View>;
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

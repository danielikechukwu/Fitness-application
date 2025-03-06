import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart, yAxisSides } from "react-native-gifted-charts";
import colors from "@/constants/colors";

const WorkoutSectionGraph = () => {
  const data1 = [
    { value: 70 },
    { value: 36 },
    { value: 50 },
    { value: 40 },
    { value: 18 },
    { value: 38 },
  ];
  const data2 = [
    { value: 50 },
    { value: 10 },
    { value: 45 },
    { value: 30 },
    { value: 45 },
    { value: 18 },
  ];
  return (
    <View
      style={{
        backgroundColor: colors.white,
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
          pointerColor: "lightgray",
          radius: 4,
          pointerLabelWidth: 100,
          pointerLabelHeight: 120,
          pointerLabelComponent: (items: any) => {
            return (
              <View
                style={{
                  height: 120,
                  width: 100,
                  backgroundColor: "#282C3E",
                  borderRadius: 4,
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <Text style={{ color: "lightgray", fontSize: 12 }}>Hello, world</Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default WorkoutSectionGraph;

const styles = StyleSheet.create({});

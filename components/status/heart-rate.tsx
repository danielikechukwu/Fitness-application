import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-gifted-charts";

// const screenWidth = Dimensions.get('window').width;

const HeartRate: React.FC = () => {

  const ptData = [
    { value: 20, date: "1 Apr 2022" },
    { value: 40, date: "2 Apr 2022" },
    { value: 100, date: "3 Apr 2022" },
    { value: 30, date: "4 Apr 2022" },
    { value: 140, date: "5 Apr 2022" },
    { value: 105, date: "6 Apr 2022" },
    { value: 60, date: "7 Apr 2022" },
    { value: 100, date: "8 Apr 2022" },

    { value: 120, date: "9 Apr 2022" },
    {
      value: 240,
      date: "10 Apr 2022",
    },
    { value: 280, date: "11 Apr 2022" },
    { value: 260, date: "12 Apr 2022" },
    { value: 340, date: "13 Apr 2022" },
    { value: 105, date: "14 Apr 2022" },
    { value: 280, date: "15 Apr 2022" },
    { value: 190, date: "16 Apr 2022" },

    { value: 370, date: "17 Apr 2022" },
    { value: 75, date: "18 Apr 2022" },
    { value: 295, date: "19 Apr 2022" },
    {
      value: 60,
      date: "20 Apr 2022",
    },
    { value: 200, date: "21 Apr 2022" },
    { value: 305, date: "22 Apr 2022" },
    { value: 60, date: "23 Apr 2022" },
    { value: 255, date: "24 Apr 2022" },

    { value: 90, date: "25 Apr 2022" },
    { value: 220, date: "26 Apr 2022" },
    { value: 205, date: "27 Apr 2022" },
    { value: 230, date: "28 Apr 2022" },
    { value: 410, date: "29 Apr 2022" },
    {
      value: 200,
      date: "30 Apr 2022",
    },
    { value: 240, date: "1 May 2022" },
    { value: 250, date: "2 May 2022" },
    { value: 280, date: "3 May 2022" },
    { value: 250, date: "4 May 2022" },
    { value: 210, date: "5 May 2022" },
    { value: 20, date: "1 Apr 2022" },
    { value: 40, date: "2 Apr 2022" },
    { value: 100, date: "3 Apr 2022" },
    { value: 30, date: "4 Apr 2022" },
    { value: 140, date: "5 Apr 2022" },
    { value: 105, date: "6 Apr 2022" },
    { value: 60, date: "7 Apr 2022" },
    { value: 100, date: "8 Apr 2022" },

    { value: 120, date: "9 Apr 2022" },
    {
      value: 240,
      date: '10 Apr 2022'
   
    },
    { value: 280, date: "11 Apr 2022" },
    { value: 260, date: "12 Apr 2022" },
    { value: 340, date: "13 Apr 2022" },
    { value: 105, date: "14 Apr 2022" },
    { value: 280, date: "15 Apr 2022" },
    { value: 190, date: "16 Apr 2022" },

    { value: 370, date: "17 Apr 2022" },
  ];

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: colors.black,
          marginLeft: "5%",
          fontFamily: fonts.semiBold,
          fontSize: 16,
        }}
      >
        Heart Rate
      </Text>
      <Text
        style={{
          color: colors.brand,
          fontFamily: fonts.bold,
          marginLeft: "5%",
          fontSize: 18,
        }}
      >
        78 BPM
      </Text>
      <View style={styles.chart}>
        <LineChart
          areaChart
          data={ptData}          
          width={350}
          height={90}
          hideDataPoints
          spacing={10}
          color="rgb(71, 124, 238)"
          thickness={3}
          startFillColor="rgb(175, 199, 250)"
          endFillColor="rgb(235, 238, 242)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={5}
          maxValue={500}
          yAxisThickness={0}
          xAxisThickness={0}
          hideYAxisText={true}
          hideRules={true}          
          pointerConfig={{
            pointerStripHeight: 40,
            pointerStripWidth: 2,
            pointerColor: colors.secondary,
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: any) => {
              return (
                <View
                  style={{
                    height: 30,
                    width: 100,
                    backgroundColor: colors.secondary,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.regular,
                      fontSize: 12,
                    }}
                  >
                    3mins ago
                  </Text>
                </View>
              );
            },
            showPointerStrip: false,
          }}
        />
      </View>
    </View>
  );
};

export default HeartRate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "5%",
    borderRadius: 15,
    backgroundColor: colors.border
  },
  chart: {

  },
} as const);

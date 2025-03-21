import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import IWaterIntakeTimeLine from "../../types/water-intake-timeline";

const waterIntakeTimeLine: IWaterIntakeTimeLine[] = [
  { id: 1, time: "6am - 8am", amount: "600ml" },
  { id: 2, time: "9am - 11am", amount: "500ml" },
  { id: 3, time: "11am - 2pm", amount: "1000ml" },
  { id: 4, time: "2pm - 4pm", amount: "700ml" },
  { id: 5, time: "6am - 8am", amount: "600ml" },
  { id: 6, time: "9am - 11am", amount: "500ml" },
  { id: 7, time: "11am - 2pm", amount: "1000ml" },
  { id: 8, time: "2pm - 4pm", amount: "700ml" },
  { id: 9, time: "4pm - now", amount: "900ml", isCurrent: true },
];

const WaterIntakeTimeLine: React.FC = () => {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    nestedScrollEnabled
    style={{ maxHeight: 290 }}
  >
    {waterIntakeTimeLine.map((item: IWaterIntakeTimeLine, index: number) => (
      <View key={index} style={styles.container}>
        <View>
          {/* Dots with gradient effect */}
          <View
            style={[styles.dot, item.isCurrent && styles.currentDot]}
          ></View>

          {/* Dashed Line */}
          {!item.isCurrent &&
            [...Array(5)].map((_, index) => (
              <View key={index} style={styles.dashedLine} />
            ))}
        </View>

        {/* Time and Amount */}
        <View style={styles.textContainer}>
          <Text style={styles.timeText}>{item.time}</Text>
          <Text style={styles.amountText}>{item.amount}</Text>
        </View>
      </View>
    ))}
  </ScrollView>
  );
};

export default WaterIntakeTimeLine;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.secondary,
  },

  currentDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderColor: "rgba(223, 167, 248, 0.5)",
    borderWidth: 4,
  },

  dashedLine: {
    width: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.gray2,
    marginVertical: 3,
    marginLeft: 5,
  },

  textContainer: {
    marginLeft: 10,
  },

  timeText: {
    fontSize: 14,
    color: colors.gray2,
  },

  amountText: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.secondary,
  },

  shadow: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 1,
  },

  topShadow: {
    top: 0,
  },

  bottomShadow: {
    bottom: 0,
  },
} as const);

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";

const waterIntakeData = [
  { time: "6am - 8am", amount: "600ml" },
  { time: "9am - 11am", amount: "500ml" },
  { time: "11am - 2pm", amount: "1000ml" },
  { time: "2pm - 4pm", amount: "700ml" },
  { time: "4pm - now", amount: "900ml", isCurrent: true },
];

const WaterIntakeTimeLine: React.FC = () => {
  return (
    <FlatList
      data={waterIntakeData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View>
            {/* Dots with gradient effect */}
            <View
              style={[styles.dot, item.isCurrent && styles.currentDot]}
            ></View>

            {/* Dashed Line */}
            {!item.isCurrent && <View style={styles.dashedLine} />}
          </View>

          {/* Time and Amount */}
          <View style={styles.textContainer}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text style={styles.amountText}>{item.amount}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default WaterIntakeTimeLine;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1
  },
  currentDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    shadowColor: "#E4B0FA",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  dashedLine: {
    width: 1,
    height: 40,
    backgroundColor: colors.gray2,
    marginLeft: 5,
  },

  textContainer: {
    marginLeft: 10,
    // borderWidth:1
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
} as const);

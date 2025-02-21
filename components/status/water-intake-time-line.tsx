import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

interface Props {
  time: string;
  amount: string;
  isCurrent?: boolean;
}

const waterIntakeData: Props[] = [
  { time: "6am - 8am", amount: "600ml" },
  { time: "9am - 11am", amount: "500ml" },
  { time: "11am - 2pm", amount: "1000ml" },
  { time: "2pm - 4pm", amount: "700ml" },

  { time: "6am - 8am", amount: "600ml" },
  { time: "9am - 11am", amount: "500ml" },
  { time: "11am - 2pm", amount: "1000ml" },
  { time: "2pm - 4pm", amount: "700ml" },

  { time: "4pm - now", amount: "900ml", isCurrent: true },
];

const WaterIntakeTimeLine: React.FC = () => {
  return (
    <View
      style={{
        marginTop: "4%",
        height: "88%",
        flex: 1,
      }}
    >
      <FlatList
        data={waterIntakeData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
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
        )}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ maxHeight: 300 }}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
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
} as const);

import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import WaterIntakeGraph from "../water-intake-graph";

const WaterIntake: React.FC = () => {
  return (
    <View style={styles.container}>

      <View>
        <WaterIntakeGraph waterIntake={1600}/>
      </View>

      <View>
        <View>
          <Text>Water Intake</Text>
          <Text>4 Liters</Text>
        </View>
        <View></View>
      </View>

    </View>
  );
};

export default WaterIntake;

const styles = StyleSheet.create({
  container: {
    width: "120%",
    height: "63%",
    padding: "4%",
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: colors.white,
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
} as const);

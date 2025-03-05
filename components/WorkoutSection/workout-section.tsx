import { StyleSheet, Text, View, ViewBase } from "react-native";
import React from "react";
import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import SelectButton from "./select-button";

const WorkoutSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderColor: "red",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: '3%'
        }}
      >
        <Text
          style={{ color: colors.black, fontFamily: fonts.bold, fontSize: 16 }}
        >
          Workout Progress
        </Text>
        <SelectButton />
      </View>
      <View>
        <Text>Hello, world</Text>
      </View>
    </View>
  );
};

export default WorkoutSection;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 1,
  },
} as const);

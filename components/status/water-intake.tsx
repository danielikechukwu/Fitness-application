import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { fonts } from "@/constants/fonts";
import { colors } from "@/constants/colors";

const WaterIntake = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: fonts.bold, fontSize: 18 }}>water intake</Text>
      <Text style={{marginBottom: '5%'}}>
        <Text style={{ fontSize: 22, fontFamily: fonts.bold, color: colors.brand }}>8</Text>
        <Text style={{ fontFamily: fonts.bold, fontSize: 16, color: colors.brand }}>h</Text>
        <Text style={{ fontFamily: fonts.bold, fontSize: 22, color: colors.brand }}>20</Text>
        <Text style={{ fontFamily: fonts.bold, fontSize: 16, color: colors.brand }}>m</Text>
      </Text>

    </View>
  );
};

export default WaterIntake;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '64%',
    padding: "4%",
    borderRadius: 25,
    elevation: 15,
    backgroundColor: colors.white
  },
});

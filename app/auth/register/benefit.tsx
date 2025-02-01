import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { Button } from "react-native-paper";

const Benefit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} />

      <View style={styles.content}>
        <View style={styles.topTextSection}>
          <Text style={styles.heading}>What is your goal?</Text>
          <Text>It will help us to choose a best</Text>
          <Text>program for you</Text>
        </View>

        <View>
          <Text>Hello, world</Text>
        </View>

        <View style={{ width: "90%" }}>
          <Button
            mode="contained"
            textColor={colors.white}
            buttonColor={colors.brand}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ fontFamily: fonts.bold, fontSize: 16 }}>
              Confirm
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Benefit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: "19%",
    paddingBottom: "19%",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  topTextSection: {
    alignItems: "center",
  },

  heading: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.black,
  },
});

import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";

const Onboarding4 = () => {

    const router = useRouter();

  return (
    <View style={styles.buttonBorder}>
      <Pressable
        onPress={() => router.replace("/onboarding/onboarding5")}
        style={styles.container}
      >
        <Image source={require("../../assets/images/light-right-arrow.png")} />
      </Pressable>
    </View>
  );
};

export default Onboarding4;

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.brand,
    width: 57,
    height: 57,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonBorder: {
    borderWidth: 3,
    borderRadius: "50%",
    borderLeftColor: colors.white,
    borderBottomColor: colors.brand,
    borderTopColor: colors.brand,
    borderRightColor: colors.brand,
    padding: 5,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",

  }
});

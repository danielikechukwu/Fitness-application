import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";

const Onboarding5 = () => {

  const router = useRouter();

  return (
    <View style={styles.buttonBorder}>
      <Pressable
        onPress={() => console.log("Hello, world")}
        style={styles.container}
      >
        <Image source={require("../../assets/images/light-right-arrow.png")} />
      </Pressable>
    </View>
  );
};

export default Onboarding5;

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
    padding: 5,
    width: 80,
    height: 80,
    borderColor: colors.brand,
    alignItems: "center",
    justifyContent: "center",
  }
  
});

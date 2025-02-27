import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import IButton from "../../types/onboarding-button";
import { useRouter } from "expo-router";

const Next = (props: IButton) => {
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [styles.containter]}
      onPress={() => router.replace(props.path)}
    >
      <Text style={styles.buttonText}>{props.title}</Text>

      <Image
        tintColor={colors.white}
        source={require("../../assets/images/icons/light-right-arrow.png")}
        style={{ marginLeft: 10 }}
      />
    </Pressable>
  );
};

export default Next;

const styles = StyleSheet.create({
  containter: {
    backgroundColor: colors.brand,
    height: 46,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    flexDirection: "row",
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 18,
  },
} as const);

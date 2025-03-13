import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import { useRouter } from "expo-router";
import IButton from "../../types/onboarding-button";

const Buttons: React.FC<IButton> = (props: IButton) => {
  
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.containter,
        //pressed && { backgroundColor: colors.gray3 },
      ]}
      onPress={() => router.replace(props.path)}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  containter: {
    backgroundColor: colors.white,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
  },

  buttonText: {
    color: colors.brand,
    fontFamily: fonts.bold,
    fontSize: 12,
  },
} as const);

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import IButton from "@/app/types/IButton";
import { fonts } from "@/constants/fonts";
import { useRouter } from "expo-router";

function Buttons(props: IButton) {
  const router = useRouter();

  return (
    <Pressable
    style={({ pressed }) => [
      styles.containter,
      pressed && {backgroundColor: colors.gray3},
    ]}
      onPress={() => console.log("Get started")}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
}

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
});

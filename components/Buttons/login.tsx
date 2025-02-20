import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import { useRouter } from "expo-router";
import IButton from "../../app/types/onboarding-button";

const LoginBtn: React.FC<IButton> = (props: IButton) => {
  
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.containter
      ]}
      onPress={() => router.replace(props.path)}
    >

      <Image source={require("../../assets/images/icons/login.png")} />
      <Text style={styles.buttonText}>{props.title}</Text>

    </Pressable>
  );
}

export default LoginBtn;

const styles = StyleSheet.create({
  containter: {
    backgroundColor: colors.brand,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    flexDirection: 'row'
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 18,
    marginLeft: 12
  },
} as const);

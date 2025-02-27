import { Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import { useRouter } from "expo-router";
import IButton from "../../types/onboarding-button";

const OnboardingButton: React.FC<IButton> = (props: IButton) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.replace(props.path)}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/icons/light-right-arrow.png")}
      />
    </Pressable>
  );
};

export default OnboardingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brand,
    width: 57,
    height: 57,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
} as const);

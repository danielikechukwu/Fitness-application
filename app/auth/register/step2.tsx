import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";

const RegisterStep2 = () => {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="white" />

      <View>

        <Image
          source={require("../../../assets/images/sign-up-and-login/step2.png")}
          resizeMode="cover"
          style={{ width: "auto", objectFit: "fill" }}
        />

        <View style={styles.textSection}>
          <Text style={styles.heading}>Let's complete your profile</Text>
          <Text>
            It will help us to know more about you!
          </Text>
        </View>


        </View>

    </SafeAreaView>
  );
};

export default RegisterStep2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  textSection: {
marginTop: '10%',
alignItems: 'center'
  },

    heading: {
      fontFamily: fonts.bold,
      fontSize: 22,
    },
});

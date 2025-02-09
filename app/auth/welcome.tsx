import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { Button } from "react-native-paper";
import { fonts } from "@/constants/fonts";

const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} />

      <View style={styles.img}>
        <Image
          source={require("../../assets/images/sign-up-and-login/welcome.png")}
        />
      </View>

      <View style={styles.textSection}>
        <Text style={styles.heading}>Welcome, Johnny</Text>
        <Text style={styles.text}>
          You are all set now, let's reach your goals together with us
        </Text>
      </View>

      <View style={styles.btn}>
        <Button
          mode="contained"
          textColor={colors.white}
          buttonColor={colors.brand}
          onPress={() => console.log("Pressed")}
        >
          <Text style={{ fontFamily: fonts.bold, fontSize: 16 }}>
            Go To Home
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  img: {
    alignItems: "center",
    marginTop: "20%",
  },

  btn: {
    flex: 1,
    width: "90%",
    justifyContent: "flex-end",
    marginBottom: "10%",
    alignSelf: "center",
  },

  textSection: {
    alignItems: "center",
    marginTop: "15%",
  },

  heading: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.black,
  },

  text: {
    color: colors.gray1,
    fontFamily: fonts.regular,
    width: "70%",
    textAlign: "center",
  },
} as const);

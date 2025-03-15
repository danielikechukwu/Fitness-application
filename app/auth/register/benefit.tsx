import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import colors from "../../../constants/colors";
import fonts from "../../../constants/fonts";
import { Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Slider from "../../../components/slider";

const Benefit: React.FC = () => {
  
  const colorScheme = useColorScheme();

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === "dark" ? "dark" : "dark"} />

      <View style={styles.content}>

        <View style={styles.topTextSection}>
          <Text style={styles.heading}>What is your goal?</Text>
          <Text style={styles.text}>It will help us to choose a best</Text>
          <Text style={styles.text}>program for you</Text>
        </View>

        <View style={{borderWidth: 2, height: '64%'}}>
          <Slider />
        </View>

        <View style={{ width: "90%" }}>
          <Button
            mode="contained"
            textColor={colors.white}
            buttonColor={colors.brand}
            onPress={() => router.replace("/auth/login")}
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
    paddingTop: "5%"
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  topTextSection: {
    alignItems: "center",
  },

  heading: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.black,
  },

  text: {
    color: colors.gray1,
    fontFamily: fonts.regular,
  },
} as const);

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useColorScheme,
} from "react-native";
import React from "react";
import colors from "../../../constants/colors";
import fonts from "../../../constants/fonts";
import Next from "../../../components/Buttons/next";
import NumberLabel from "../../../components/Labels/weight-height-label";
import DatePicker from "../../../components/Labels/date-picker";
import DropDown from "../../../components/Labels/dropdown";
import { StatusBar } from "expo-status-bar";

const CompleteAccount: React.FC = () => {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === "dark" ? "dark" : "dark"} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image
            source={require("../../../assets/images/sign-up-and-login/step2.png")}
            resizeMode="cover"
          />

          <View style={styles.textSection}>
            <Text style={styles.textHeading}>Let's complete your profile</Text>
            <Text style={styles.textContent}>
              It will help us to know more about you!
            </Text>
          </View>

          {/* Complete form */}
          <View style={styles.form}>
            <DropDown
              icon={require("../../../assets/images/icons/two-user.png")}
              placeholder="Choose gender"
              password={false}
            />
            <DatePicker
              icon={require("../../../assets/images/icons/calender.png")}
              placeholder="Date of Birth"
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <NumberLabel
                icon={require("../../../assets/images/icons/weight-scale.png")}
                placeholder="Your Weight"
              />
              <View style={styles.measurement}>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 16,
                    color: colors.white,
                  }}
                >
                  KG
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <NumberLabel
                icon={require("../../../assets/images/icons/swap.png")}
                placeholder="Your Height"
              />
              <View style={styles.measurement}>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 16,
                    color: colors.white,
                  }}
                >
                  CM
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.button}>
            <Next path="/auth/register/benefit" title="Next" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompleteAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: "5%",
  },

  textSection: {
    marginTop: "10%",
    alignItems: "center",
  },

  textHeading: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.black,
  },

  textContent: {
    color: colors.gray1,
    fontFamily: fonts.regular,
    fontSize: 14,
  },

  form: {
    marginTop: "5%",
    marginRight: "5%",
    marginLeft: "5%",
  },

  button: {
    marginTop: "5%",
    marginBottom: "9%",
    marginRight: "5%",
    marginLeft: "5%",
  },

  measurement: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginLeft: "5%",
    borderRadius: 7,
    backgroundColor: colors.brand,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.brand,
  },
} as const);

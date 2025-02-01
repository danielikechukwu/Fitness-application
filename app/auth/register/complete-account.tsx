import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import Next from "@/components/Buttons/next";
import NumberLabel from "@/components/Labels/weight-height-label";
import Label from "@/components/Labels/label";
import DatePicker from "@/components/Labels/date-picker";

const CompleteAccount = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <ScrollView>
        <View>
          <Image
            source={require("../../../assets/images/sign-up-and-login/step2.png")}
            resizeMode="cover"
            style={{ width: "auto", objectFit: "fill" }}
          />

          <View style={styles.textSection}>
            <Text style={styles.heading}>Let's complete your profile</Text>
            <Text>It will help us to know more about you!</Text>
          </View>

          {/* Complete form */}
          <View style={styles.form}>
            <Label
              icon={require("../../../assets/images/icons/profile.png")}
              placeholder="First Name"
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
            <Next path="/auth/register/complete-account" title="Next" />
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
  },

  textSection: {
    marginTop: "10%",
    alignItems: "center",
  },

  heading: {
    fontFamily: fonts.bold,
    fontSize: 22,
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
});

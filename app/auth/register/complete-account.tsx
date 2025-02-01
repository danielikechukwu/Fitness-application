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
import Label from "@/components/label";
import { Button } from "react-native-paper";

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
            <Label
              icon={require("../../../assets/images/icons/profile.png")}
              placeholder="First Name"
              password={false}
            />
            <View>
              <Label
                icon={require("../../../assets/images/icons/profile.png")}
                placeholder="First Name"
                password={false}
              />
            </View>
            <View>
              <Label
                icon={require("../../../assets/images/icons/profile.png")}
                placeholder="First Name"
                password={false}
              />
            </View>
          </View>

          <View>
            <Button
              mode="contained"
              textColor={colors.white}
              buttonColor={colors.brand}
              onPress={() => console.log("Pressed")}
            >
              <Text style={{ fontFamily: fonts.bold, fontSize: 16 }}>
                Register
              </Text>
            </Button>
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
});

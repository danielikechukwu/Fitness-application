import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import Label from "@/components/label";
import { Button, Checkbox } from "react-native-paper";
import Buttons from "@/components/Buttons/button";

const RegisterStep1 = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <View style={styles.topText}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 20,
              color: colors.black,
            }}
          >
            Hey there,
          </Text>
          <Text
            style={{
              fontFamily: fonts.bold,
              fontSize: 24,
              color: colors.black,
            }}
          >
            Create an Account
          </Text>
        </View>

        <View style={styles.form}>
          <Label
            icon={require("../../../assets/images/icons/profile.png")}
            placeholder="First Name"
            password={false}
          />
          <Label
            icon={require("../../../assets/images/icons/profile.png")}
            placeholder="Last Name"
            password={false}
          />
          <Label
            icon={require("../../../assets/images/icons/message.png")}
            placeholder="Email"
            password={false}
          />
          <Label
            icon={require("../../../assets/images/icons/lock.png")}
            placeholder="Password"
            password={true}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: "2%",
              alignItems: "flex-start",
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
              color={colors.gray2}
            />
            <Text style={styles.conditionText}>
              By continuing you accept our{" "}
              <Text style={{ textDecorationLine: "underline" }}>
                Privacy{"\n"} Policy
              </Text>{" "}
              and{" "}
              <Text style={{ textDecorationLine: "underline" }}>
                Term of Use
              </Text>
            </Text>
          </View>
        </View>

        <View style={{ width: "90%", marginTop: "25%" }}>
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

          <View
            style={{
              marginTop: "5%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.horizontalLine}></View>
            <Text style={{ marginLeft: "2%", marginRight: "2%" }}>Or</Text>
            <View style={styles.horizontalLine}></View>
          </View>

          <View>
            <TouchableOpacity style={{borderWidth: 2}}>
              <Image
                source={require("../../../assets/images/icons/google.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
                source={require("../../../assets/images/icons/facebook.png")}
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterStep1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  topText: {
    flex: 1,
    alignItems: "center",
    marginTop: "4%",
  },

  form: {
    marginTop: "5%",
    marginRight: "5%",
    marginLeft: "5%",
  },

  conditionText: {
    fontFamily: fonts.regular,
    color: colors.gray2,
    marginLeft: "2%",
    flexWrap: "wrap",
  },

  horizontalLine: {
    width: "45%",
    height: 1,
    backgroundColor: colors.gray3,
  },
});

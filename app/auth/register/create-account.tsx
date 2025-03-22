import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import colors from "../../../constants/colors";
import fonts from "../../../constants/fonts";
import { Button, Checkbox } from "react-native-paper";
import Label from "../../../components/Labels/label";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const CreateAccount: React.FC = () => {
  const colorScheme = useColorScheme();

  const [checked, setChecked] = useState<boolean>(false);

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style={colorScheme === "dark" ? "dark" : "dark"} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: "3%",
            marginBottom: "15%",
          }}
        >
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
                uncheckedColor={colors.gray2}
                onPress={() => {
                  setChecked(!checked);
                  console.log(!checked);
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

          <View style={{ width: "90%", marginTop: "22%" }}>
            <Button
              mode="contained"
              textColor={colors.white}
              buttonColor={colors.brand}
              onPress={() => { router.replace('/auth/register/complete-account')}}
            >
              <Text style={{ fontFamily: fonts.bold, fontSize: 14 }}>
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

            <View
              style={{
                flexDirection: "row",
                marginTop: "7%",
                justifyContent: "center",
                gap: "10%",
              }}
            >
              <TouchableOpacity
                style={styles.socials}
                onPress={() => console.log("Google")}
              >
                <Image
                  source={require("../../../assets/images/icons/google.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socials}
                onPress={() => console.log("Facebook")}
              >
                <Image
                  source={require("../../../assets/images/icons/facebook.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", marginTop: "5%" }}>
              <Text
                style={{
                  fontFamily: fonts.medium,
                  color: colors.black,
                  fontSize: 14,
                }}
              >
                Aready have an account?{" "}
                <Text
                  style={{ color: colors.brand }}
                  onPress={() => router.replace("/auth/login")}
                >
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: "5%",
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
    fontSize: 14,
  },

  horizontalLine: {
    width: "45%",
    height: 1,
    backgroundColor: colors.gray3,
  },

  socials: {
    borderWidth: 1,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: colors.gray3,
  },
} as const);

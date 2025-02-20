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
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import Label from "../../components/Labels/label";
import LoginBtn from "../../components/Buttons/login";
import { useRouter } from "expo-router";

const Login: React.FC = () => {

  const [checked, setChecked] = useState<boolean>(false);

  const router = useRouter();

  return (

    <SafeAreaView style={styles.container}>
        
      <StatusBar backgroundColor="white" />

      <View style={{ flex: 1, alignItems: "center", marginTop: "4%" }}>

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
            Welcome Back
          </Text>
        </View>

        <View style={styles.form}>
          <Label
            icon={require("../../assets/images/icons/message.png")}
            placeholder="Email"
            password={false}
          />
          <Label
            icon={require("../../assets/images/icons/lock.png")}
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
            <Text style={styles.text}>
              Forgot your password
            </Text>
          </View>
        </View>

        <View style={{ width: "90%", flex: 1, justifyContent: 'flex-end', marginBottom: '15%' }}>

          <LoginBtn title="Login" path="" />

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
                source={require("../../assets/images/icons/google.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socials}
              onPress={() => console.log("Facebook")}
            >
              <Image
                source={require("../../assets/images/icons/facebook.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginTop: "5%" }}>
            <Text style={{fontFamily: fonts.medium, color: colors.black, fontSize: 14}}>Don't have an account yet? <Text style={{color: colors.brand}} onPress={() => router.replace('/auth/register/create-account')}>Register</Text></Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  form: {
    marginTop: "5%",
    marginRight: "5%",
    marginLeft: "5%",
    alignItems: 'center'
  },

  text: {
    fontFamily: fonts.regular,
    color: colors.gray2,
    fontSize: 14,
    textDecorationLine: 'underline'
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

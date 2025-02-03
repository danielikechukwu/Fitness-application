import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";

const Home = (): React.JSX.Element => {
  const [notification, setNotification] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} />

      <ScrollView>
        <View>
          <View style={styles.header}>
            <View>
              <Text
                style={{
                  color: colors.gray2,
                  fontFamily: fonts.regular,
                  fontSize: 16,
                }}
              >
                Welcome Back,
              </Text>
              <Text style={{ fontFamily: fonts.bold, fontSize: 22 }}>
                Stefani Wong
              </Text>
            </View>
            <View style={styles.notification}>
              <Image
                tintColor={colors.black}
                source={require("../../assets/images/icons/notification.png")}
              />
            </View>
          </View>

          <View style={styles.banner}>
            <ImageBackground
              resizeMode="cover"
              style={styles.bannerDots}
              source={require("../../assets/images/dashboard/banner-dots.png")}
            >
              <View></View>
              <View></View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingRight: "20%",
    paddingLeft: "20%",
    paddingTop: "20%",
  },

  notification: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray3,
  },

  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  notificationIcon: {
    width: 25,
    height: 25,
  },

  banner: {
    borderWidth: 1,
    marginTop: "10%",
    height: 170,
    backgroundColor: colors.brand
  },

  bannerDots: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

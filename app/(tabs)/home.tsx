import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { LineChart } from "react-native-gifted-charts";
import HomeBanner from "@/components/banner/home";

const Home = (): React.JSX.Element => {

  const [notification, setNotification] = useState<boolean>(false);

  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

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
            <Pressable
              style={styles.notification}
              onPress={() => console.log("notification")}
            >
              {notification ? (
                <Image
                  source={require("../../assets/images/icons/available-notification.png")}
                  style={{ width: 22, height: 22 }}
                />
              ) : (
                <Image
                  tintColor={colors.black}
                  source={require("../../assets/images/icons/notification.png")}
                />
              )}
            </Pressable>
          </View>

          <HomeBanner />

          <View style={styles.action}>
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: fonts.bold,
                  fontSize: 16,
                }}
              >
                Today Target
              </Text>
            </View>
            <View>
              <Pressable
                style={{
                  backgroundColor: colors.brand,
                  padding: "6%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 18,
                }}
                onPress={() => console.log("Today target")}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontFamily: fonts.regular,
                    fontSize: 18,
                  }}
                >
                  Check
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.statusSection}>
            <Text
              style={{
                color: colors.black,
                fontFamily: fonts.bold,
                fontSize: 16,
              }}
            >
              Activity Status
            </Text>

            <View style={styles.chartStatus}>
              <LineChart areaChart data={data} pointerConfig={{}} />
            </View>
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
    backgroundColor: colors.border,
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

  action: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "8%",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingRight: "5%",
    paddingLeft: "5%",
    backgroundColor: colors.border,
    borderRadius: 20,
    alignItems: "center",
  },

  statusSection: {
    marginTop: "5%",
  },

  chartStatus: {},
});

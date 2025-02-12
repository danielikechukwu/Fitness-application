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
import HeartRate from "@/components/status/heart-rate";
import Sleep from "@/components/status/sleep";
import WaterIntake from "@/components/status/water-intake";
import Calories from "@/components/status/calories";


const Home: React.FC = () => {

  const [notification, setNotification] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
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

          <Text
            style={{
              color: colors.black,
              fontFamily: fonts.semiBold,
              fontSize: 18,
              marginTop: "5%",
            }}
          >
            Activity Status
          </Text>

          <View style={styles.status}>
            <View>
              <HeartRate />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: "7%",
                width: '100%'
              }}
            >
              <View>
                <WaterIntake />                
              </View>
              <View style={{gap: '4%'}}>
                <View>
                  <Sleep />
                </View>
                <View>
                  <Calories calorieCount={60} />
                </View>
              </View>
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
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingTop: "10%",
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

  status: {
    marginTop: "2%",
    marginBottom: "20%",
  },
} as const);

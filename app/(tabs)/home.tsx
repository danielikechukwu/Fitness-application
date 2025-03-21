import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  useColorScheme,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import HomeBanner from "../../components/Banner/home";
import HeartRate from "../../components/Status/heart-rate";
import Sleep from "../../components/Status/sleep";
import WaterIntake from "../../components/Status/water-intake";
import Calories from "../../components/Status/calories";
import LatestWorkoutSection from "../../components/WorkoutSection/latest-workout-section";
import WorkoutSection from "../../components/WorkoutSection/workout-section";
import { StatusBar } from "expo-status-bar";
import IWaterIntakeTimeLine from "../../types/water-intake-timeline";
import { GraphProvider } from "../../context/graph-context";

const Home: React.FC = () => {

  const colorScheme = useColorScheme();

  const [notification, setNotification] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style={colorScheme === "dark" ? "dark" : "dark"} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled
        keyboardShouldPersistTaps="handled"
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

          <View style={{ marginLeft: "3%", marginRight: "3%" }}>
            <HomeBanner />
          </View>

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
                  padding: "8%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
                onPress={() => console.log("Today target")}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontFamily: fonts.bold,
                    fontSize: 14,
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
              marginTop: "4%",
              marginLeft: "3%",
            }}
          >
            Activity Status
          </Text>

          <View style={styles.status}>
            <View style={{ marginLeft: "3%", marginRight: "3%" }}>
              <HeartRate />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: "5%",
                width: "100%",
                height: "62%",
              }}
            >
              <View style={{ marginLeft: "3%" }}>
                <WaterIntake />
              </View>
              <View style={{ gap: "6%", width: "50%" }}>
                <View
                  style={{
                    alignSelf: "flex-end",
                    width: "90%",
                    marginRight: "3%",
                  }}
                >
                  <Sleep />
                </View>
                <View
                  style={{
                    alignSelf: "flex-end",
                    width: "90%",
                    marginRight: "3%",
                  }}
                >
                  <Calories calorieCount={60} />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{ marginTop: "7%", marginLeft: "3%", marginRight: "3%" }}
          >
            <GraphProvider>
              <WorkoutSection />
            </GraphProvider>
          </View>

          <View style={{ marginTop: "7%" }}>
            <LatestWorkoutSection />
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
    paddingTop: "10%",
    paddingBottom: "2%",
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
    marginLeft: "3%",
    marginRight: "3%",
  },

  notificationIcon: {
    width: 25,
    height: 25,
  },

  action: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingRight: "5%",
    paddingLeft: "5%",
    backgroundColor: colors.border,
    borderRadius: 20,
    alignItems: "center",
  },

  status: {
    flex: 1,
    marginTop: "2%",
  },
} as const);

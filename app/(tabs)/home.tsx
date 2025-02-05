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
import PieChart from "react-native-pie-chart";

const Home = (): React.JSX.Element => {

  const [notification, setNotification] = useState<boolean>(false);

  const widthAndHeight: number = 110;

  const series = [
    {
      value: 150,
      color: colors.secondary,
      label: { text: "22,1", fontWeight: "bold", fill: colors.white },
    },
    { value: 430, color: colors.white },
  ];

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

          <View style={styles.banner}>
            <ImageBackground
              resizeMode="cover"
              style={styles.bannerDots}
              source={require("../../assets/images/dashboard/banner-dots.png")}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: "5%",
                  paddingLeft: "5%",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.bold,
                      fontSize: 16,
                    }}
                  >
                    BMI (Body Mass Inded)
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.regular,
                      fontSize: 14,
                    }}
                  >
                    You have a normal weight
                  </Text>
                  <View>
                    <Pressable
                      style={styles.bannerButton}
                      onPress={() => console.log("Hellow.")}
                    >
                      <Text
                        style={{
                          color: colors.white,
                          fontFamily: fonts.regular,
                        }}
                      >
                        View More
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View>
                  <PieChart widthAndHeight={widthAndHeight} series={series} />
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.action}>
            <View>
              <Text style={{ color: colors.black, fontFamily: fonts.bold, fontSize: 18 }}>
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
                  borderRadius: 18
                }}
                onPress={() => console.log("Today target")}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontFamily: fonts.regular,
                    fontSize: 18
                  }}
                >
                  Check
                </Text>
              </Pressable>
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

  banner: {
    marginTop: "10%",
    height: 170,
    backgroundColor: colors.brand,
    borderRadius: 17,
  },

  bannerDots: {
    flex: 1,
  },

  bannerButton: {
    marginTop: "8%",
    width: "55%",
    padding: "5%",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },

  action: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingRight: "5%",
    paddingLeft: "5%",
    backgroundColor: colors.border,
    borderRadius: 20,
    alignItems: 'center'
  },
});

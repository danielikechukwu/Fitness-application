import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const RootLayout = () => {
  const [dot, setDot] = useState(false);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle: {
          backgroundColor: colors.white,
          height: "8%",
          paddingTop: "3%",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                tintColor={colors.gray1}
                source={require("../../assets/images/icons/home.png")}
              />
              {focused && (
                <Image
                  style={{ alignSelf: "center", marginTop: "19%" }}
                  tintColor={colors.gray1}
                  source={require("../../assets/images/icons/dot.png")}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                tintColor={colors.gray1}
                source={require("../../assets/images/icons/activity.png")}
              />

              {focused && (
                <Image
                  style={{ alignSelf: "center", marginTop: "19%" }}
                  tintColor={colors.gray1}
                  source={require("../../assets/images/icons/dot.png")}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: (_) => (
            <View
              style={{
                width: 55,
                height: 55,
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.brand,
                bottom: "40%",
              }}
            >
              <Image
                tintColor={colors.white}
                source={require("../../assets/images/icons/search.png")}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                tintColor={colors.gray1}
                source={require("../../assets/images/icons/camera.png")}
              />

              {focused && (
                <Image
                  style={{ alignSelf: "center", marginTop: "19%" }}
                  tintColor={colors.gray1}
                  source={require("../../assets/images/icons/dot.png")}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                tintColor={colors.gray1}
                source={require("../../assets/images/icons/profile.png")}
              />

              {focused && (
                <Image
                  style={{ alignSelf: "center", marginTop: "19%" }}
                  tintColor={colors.gray1}
                  source={require("../../assets/images/icons/dot.png")}
                />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;

import { View, Image, Pressable } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import colors from "../../constants/colors";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        headerShown: false,
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
              {focused ? (
                <Image
                  accessibilityLabel="home"
                  source={require("../../assets/images/icons/active-home.png")}
                />
              ) : (
                <Image
                  tintColor={colors.gray1}
                  accessibilityLabel="home"
                  source={require("../../assets/images/icons/home.png")}
                />
              )}
              {focused && (
                <Image
                  style={{ alignSelf: "center", marginTop: "19%" }}
                  accessibilityLabel="dot"
                  source={require("../../assets/images/icons/dot.png")}
                />
              )}
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={{ color: "transparent" }} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  accessibilityLabel="activity"
                  tintColor={colors.secondary}
                  source={require("../../assets/images/icons/active-activity.png")}
                />
              ) : (
                <Image
                  tintColor={colors.gray1}
                  accessibilityLabel="activity"
                  source={require("../../assets/images/icons/activity.png")}
                />
              )}
              {focused && (
                <Image
                  style={{ alignSelf: "center", marginTop: "19%" }}
                  accessibilityLabel="dot"
                  source={require("../../assets/images/icons/dot.png")}
                />
              )}
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={{ color: "transparent" }} />
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
                accessibilityLabel="search"
                source={require("../../assets/images/icons/search.png")}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={{ color: "transparent" }} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  accessibilityLabel="camera"
                  source={require("../../assets/images/icons/active-camera.png")}
                />
              ) : (
                <Image
                  tintColor={colors.gray1}
                  accessibilityLabel="camera"
                  source={require("../../assets/images/icons/camera.png")}
                />
              )}
              {focused && (
                <Image
                  style={{ alignSelf: "center", marginTop: "19%" }}
                  accessibilityLabel="dot"
                  source={require("../../assets/images/icons/dot.png")}
                />
              )}
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={{ color: "transparent" }} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  accessibilityLabel="profile"
                  source={require("../../assets/images/icons/active-profile.png")}
                />
              ) : (
                <Image
                  tintColor={colors.gray1}
                  accessibilityLabel="profile"
                  source={require("../../assets/images/icons/profile.png")}
                />
              )}
              {focused && (
                <Image
                  style={{ alignSelf: "center", marginTop: "19%" }}
                  accessibilityLabel="dot"
                  source={require("../../assets/images/icons/dot.png")}
                />
              )}
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={{ color: "transparent" }} />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;

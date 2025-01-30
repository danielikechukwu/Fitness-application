import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { PaperProvider } from "react-native-paper";

//Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); //hide splash screen after fonts load
    }
  }, [fontsLoaded]);

  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </PaperProvider>
  );
};

export default RootLayout;
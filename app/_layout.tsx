import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { PaperProvider, Provider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;

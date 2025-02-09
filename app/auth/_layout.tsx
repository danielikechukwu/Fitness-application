import React from "react";
import { Stack } from "expo-router";

const AuthLayout: React.FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      <Stack.Screen name="welcome" />
    </Stack>
  );
};

export default AuthLayout;

import React from "react";
import { Stack } from "expo-router";

const OnboardingLayout: React.FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: 'fade', presentation: 'card' }}>
      <Stack.Screen name="onboarding1" />
      <Stack.Screen name="onboarding2" />
      <Stack.Screen name="onboarding3" />
      <Stack.Screen name="onboarding4" />
      <Stack.Screen name="onboarding5" />
    </Stack>
  );
};

export default OnboardingLayout;

import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useColorScheme,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index: React.FC = () => {
  const colorScheme = useColorScheme();

  const router = useRouter();

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar style={colorScheme === "dark" ? "dark" : "dark"} />
        <Text>Welcome</Text>
        <Button title="Next" onPress={() => router.push("/(tabs)/home")} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

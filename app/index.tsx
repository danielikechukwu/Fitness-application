import {
  StyleSheet,
  View,
  ScrollView,
  useColorScheme,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import colors from "../constants/colors";
import { Button } from "react-native-paper";
import { router } from "expo-router";

const Index: React.FC<void> = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === "dark" ? "dark" : "dark"} />

      <ScrollView>
        <View>
          <Button mode="contained" onPress={() => router.push("/auth/register/benefit")}>
            Welcome
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
} as const);

import { StyleSheet, Text, View, ScrollView, useColorScheme } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import { StatusBar } from "expo-status-bar";

const Profile: React.FC = () => {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style={colorScheme === 'dark' ? 'dark' : 'dark'} />

      <ScrollView>
        <View>
          <Text>Hello, Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
} as const);

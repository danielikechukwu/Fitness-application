import { SafeAreaView, StyleSheet, Text, View, ScrollView, useColorScheme } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import { StatusBar } from "expo-status-bar";

const Search: React.FC = () => {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'dark' : 'dark'} />

      <ScrollView>
        <View>
          <Text>Hello, world</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
} as const);

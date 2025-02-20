import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";

const Sleep: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: fonts.semiBold, fontSize: 18 }}>Sleep</Text>
      <View style={{ marginBottom: "5%", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: fonts.semiBold,
              color: colors.brand,
            }}
          >
            8
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 16,
              color: colors.brand,
            }}
          >
            h
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            marginLeft: 5,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.semiBold,
              fontSize: 22,
              color: colors.brand,
            }}
          >
            20
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 16,
              color: colors.brand,
            }}
          >
            m
          </Text>
        </View>
      </View>
      <Image
        source={require("../../assets/images/dashboard/sleep-graph.png")}
        style={{ width: 130 }}
      />
    </View>
  );
};

export default Sleep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: "100%",
    padding: "8%",
    borderRadius: 25,
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 15,
      },
    }),
  },
} as const);

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { fonts } from "@/constants/fonts";
import { colors } from "@/constants/colors";

const Calories = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: fonts.semiBold, fontSize: 18 }}>Calories</Text>
      <View style={{ marginBottom: "5%", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: fonts.semiBold,
              color: colors.brand,
              marginRight: 6,
            }}
          >
            760
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 16,
              color: colors.brand,
            }}
          >
            kCal
          </Text>
        </View>
      </View>

      <View style={{alignSelf: 'center'}}>
        <View>
          <View
            style={{
              width: 80,
              height: 80,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: colors.brand
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontFamily: fonts.regular,
                fontSize: 14,
                textAlign: "center"                                
              }}
            >
              230kCal left
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calories;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    padding: "8%",
    borderRadius: 25,
  },
});

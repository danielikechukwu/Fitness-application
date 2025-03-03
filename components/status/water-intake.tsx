import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import WaterIntakeGraph from "./water-intake-graph";
import WaterIntakeTimeLine from "./water-intake-time-line";

const WaterIntake: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginRight: "5%", marginLeft: '5%' }}>
        <WaterIntakeGraph waterIntake={1900} />
      </View>

      <View>
        <View>
          <Text
            style={{
              color: colors.black,
              fontFamily: fonts.semiBold,
              fontSize: 16,
            }}
          >
            Water Intake
          </Text>
          <Text
            style={{
              color: colors.brand,
              fontFamily: fonts.semiBold,
              fontSize: 16,
            }}
          >
            4 Liters
          </Text>
        </View>
        <View style={{ marginTop: "12%" }}>
          <Text
            style={{
              color: colors.gray1,
              fontFamily: fonts.regular,
              fontSize: 12,
              marginBottom: "2%",
            }}
          >
            Real time updates
          </Text>

          <View style={{flex: 1}}>
            <WaterIntakeTimeLine />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WaterIntake;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    //height: "100%",
    paddingLeft: "5%",
    paddingTop: "9%",
    paddingBottom: "9%",
    flexDirection: "row",
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

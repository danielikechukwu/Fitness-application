import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import WorkoutProgressBar from "./workout-progress-bar";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";
import IWorkout from "@/types/workout";

const WorkoutCard: React.FC<IWorkout> = (props: IWorkout) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "94%" }}
      >
        <View style={{ marginRight: "5%" }}>
          <Image
            source={require("../../assets/images/dashboard/first-workout-pic.png")}
            style={{ width: 60, height: 60, objectFit: "contain" }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: fonts.semiBold,
              color: colors.black,
              fontSize: 14,
            }}
          >
            Fullbody Workout
          </Text>
          <Text style={{ fontFamily: fonts.regular, fontSize: 12 }}>
            180 Calories Burn | 20minutes
          </Text>
          <View style={{ marginTop: "8%" }}>
            <WorkoutProgressBar />
          </View>
        </View>
      </View>

      <View>
        <Pressable onPress={() => console.log("View details")}>
          <Image
            tintColor={colors.secondary}
            resizeMode="cover"
            source={require("../../assets/images/icons/arrow-right-circle.png")}
            style={{ width: 26, height: 26, objectFit: "fill" }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default WorkoutCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingRight: "4%",
    paddingLeft: "4%",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
} as const);

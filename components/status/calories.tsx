import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { fonts } from "@/constants/fonts";
import { colors } from "@/constants/colors";
import React, { useEffect } from "react";
import Svg, { Circle, Rect } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolate,
} from "react-native-reanimated";

interface Props {
  calorieCount: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Calories: React.FC<Props> = (props: Props) => {
  const progress = useSharedValue(0);

  const radius: number = 40;

  const circumference: number = 2 * Math.PI * radius;

  useEffect(() => {
    progress.value = withTiming(props.calorieCount / 990, { duration: 1000 }); // Assuming 2000 is max calories
  }, [props.calorieCount]);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = interpolate(progress.value, [0, 1], [100, 0]);
    return { strokeDashoffset };
  });

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: fonts.semiBold, fontSize: 18 }}>Calories</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: fonts.semiBold,
              color: colors.brand,
              marginRight: 6,
            }}
          >
            {props.calorieCount}
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

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Svg height="130" width="130" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke={colors.border}
            strokeWidth="9"
            fill="none"
          />

          <AnimatedCircle
            cx="50"
            cy="50"
            r={radius}
            stroke={colors.brand}
            strokeWidth="9"
            fill="none"
            strokeDasharray={circumference}
            strokeLinecap="round"
            animatedProps={animatedProps}
          />
        </Svg>

        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <View>
            <View
              style={{
                width: 80,
                height: 80,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: colors.brand,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontFamily: fonts.regular,
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                {990 - props.calorieCount} kCal left
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
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

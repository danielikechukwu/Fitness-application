import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("screen");

interface ISliderItem {
  id: number;
  heading: string;
  image: any;
  content: string;
}

type Props = {
  item: ISliderItem;
  index: number;
};

const SliderItem = ({ item, index }: Props) => {
  return (
    <LinearGradient
    colors={["#92A3FD", "#9DCEFF"]}
    start={[1, 0]}
    end={[0, 0]}
    style={styles.itemContainer}
  >
    <Image
      source={item.image}
      style={{ alignSelf: "center" }}
    />

    <View style={styles.textContent}>
      <Text style={styles.textHeading}>{item.heading}</Text>
      <View style={styles.horizontalLine} />
      <View style={styles.horizontalLine}></View>

      <Text style={styles.text}>{item.content}</Text>
    </View>
  </LinearGradient>
  );
};

const Slider = () => {
  const data: ISliderItem[] = [
    {
      id: 1,
      heading: "Improve Shape",
      content:
        "I have a low amount of body fat and need / want to build more muscle",
      image: require("../assets/images/sign-up-and-login/step3.png"),
    },
    {
      id: 2,
      heading: "Lean & Tone",
      content:
        "I'm skinny 'skinny fat'. look thin but have no shape. i want to add learn muscle in the right way",
      image: require("../assets/images/sign-up-and-login/step4.png"),
    },
    {
      id: 3,
      heading: "Lose a Fat",
      content:
        "I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass",
      image: require("../assets/images/sign-up-and-login/step5.png"),
    },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => <SliderItem index={index} item={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({

  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width - 100,
    gap: 20,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25,
  },

  // card: {
  //   backgroundColor: colors.brand,
  //   borderRadius: 25,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   paddingTop: "15%",
  //   paddingBottom: "15%",
  //   shadowColor: "#000",
  //   shadowOpacity: 0.2,
  //   shadowRadius: 5,
  //   elevation: 5,
  //   height: "100%",
  // },

  textContent: {
    alignItems: "center"
  },

  textHeading: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },

  text: {
     color: colors.white,
     fontFamily: fonts.regular,
     fontSize: 14,
    // marginTop: "5%",
     textAlign: "center",
  },

  horizontalLine: {
    backgroundColor: colors.black,
    width: '20%'
    // width: "20%",
    // height: "10%",
    // backgroundColor: colors.black,
  },
});

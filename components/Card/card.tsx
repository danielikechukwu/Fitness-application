import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";

const { width } = Dimensions.get("screen");

const data = [
  {
    id: "1",
    heading: "Improve Shape",
    content:
      "I have a low amount of body fat and need / want to build more muscle",
    image: require("../../assets/images/sign-up-and-login/step3.png"),
  },
  {
    id: "2",
    heading: "Lean & Tone",
    content:
      "I'm skinny 'skinny fat'. look thin but have no shape. i want to add learn muscle in the right way",
    image: require("../../assets/images/sign-up-and-login/step4.png"),
  },
  {
    id: "3",
    heading: "Lose a Fat",
    content:
      "I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass",
    image: require("../../assets/images/sign-up-and-login/step5.png"),
  },
];

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({
    item,
  }: {
    item: { heading: string; image: string; content: string };
  }) => (
    <View style={styles.card}>
      <Image source={item.image} />

      <View style={styles.textContent}>
        <Text style={styles.textHeading}>{item.heading}</Text>
        <Text style={styles.text}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8} // Adjust card width
        loop
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};

export default CardCarousel;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  card: {
    backgroundColor: colors.brand,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: "15%",
    paddingBottom: '15%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    height: "100%",
  },

  textContent: {
    marginTop: "10%",
    alignItems: 'center'
  },

  textHeading: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 16
  },

  text: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 14,
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'center'
  },
});

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import ILabel from "@/app/types/label";

const Label = (props: ILabel) => {
  const [isPasswordVisible, setIsPasswordVisiable] = useState(false);

  if (props.password) {
    return (
      <View style={styles.container}>
        <Image
          tintColor={colors.gray2}
          resizeMode="contain"
          source={props.icon}
          style={styles.img}
        />

        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={colors.gray2}
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={() => setIsPasswordVisiable(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <Image
              resizeMode="contain"
              tintColor={colors.gray2}
              source={require("../../assets/images/icons/show.png")}
              style={styles.img}
            />
          ) : (
            <Image
              resizeMode="contain"
              tintColor={colors.gray2}
              source={require("../../assets/images/icons/hide.png")}
              style={styles.img}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image
          tintColor={colors.gray2}
          resizeMode="contain"
          source={props.icon}
          style={styles.img}
        />

        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={colors.gray2}
          style={styles.input}
        />
      </View>
    );
  }
};

export default Label;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    width: "100%",
    backgroundColor: "F7F8F8",
  },

  input: {
    flex: 1, // Takes the remaining space
    fontSize: 16,
    padding: 8,
    color: colors.black,
    fontFamily: fonts.regular,
    alignSelf: "center",
  },

  img: {
    marginRight: "3%",
    width: 18,
    height: 18,
  },
});

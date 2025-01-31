import { StyleSheet, View, TextInput, Image } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import ILabel from "@/app/types/Label";

const Label = (props: ILabel) => {
  return (
    <View style={styles.inputContainer}>

      <Image resizeMode="contain" source={require("../assets/images/icons/profile.png")} style={styles.img} />

      <TextInput placeholder={props.placeholder} placeholderTextColor={colors.gray2} style={styles.input} />
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  inputContainer: {
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
    alignSelf: 'center'
  },

  img: {
    marginRight: '3%', 
    width: 18, 
    height: 18,
}
});

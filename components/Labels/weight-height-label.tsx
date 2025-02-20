import { StyleSheet, View, TextInput, Image } from "react-native";
import React, { useState } from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import ILabel from "../../app/types/label";

const NumberLabel: React.FC<ILabel> = (props: ILabel) => {

  const [number, setNumber] = useState("");

  const handleInput = (text: string) => {
    setNumber(text.replace(/[^0-9.]/g, "")); // Allows numbers and dots..
  };

  return (
    <View style={styles.inputContainer}>
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
        keyboardType="numeric"
        value={number}
        onChangeText={handleInput}
      />
    </View>
  );
};

export default NumberLabel;

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
    width: "81%",
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
} as const);

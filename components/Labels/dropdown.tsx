import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { colors } from "@/constants/colors";
import ILabel from "@/app/types/label";

const DropDown: React.FC<ILabel> = (props: ILabel) => {
    
  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={styles.container}>
      <Image
        tintColor={colors.gray2}
        resizeMode="contain"
        source={props.icon}
        style={styles.img}
      />
      <View style={{ width: "100%", marginLeft: '-3%' }}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          items={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          placeholder={{ label: props.placeholder, value: null }}
          style={pickerStyles}
        />
      </View>
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "100%",
    backgroundColor: "F7F8F8",
    flexDirection: "row",
  },

  img: {
    marginRight: "3%",
    width: 18,
    height: 18,
  },
} as const);

const pickerStyles = Object.freeze({
  inputIOS: {
    color: colors.black,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "red",
  },
  inputAndroid: {
    color: colors.black,
    //padding: 10,
    borderWidth: 3,
    borderColor: "red",
  },
});

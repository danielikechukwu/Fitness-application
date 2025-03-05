import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SelectCountry } from "react-native-element-dropdown";
import fonts from "@/constants/fonts";

const SelectButton = () => {
  const local_data = [
    {
      value: "1",
      lable: "Weekly",
    },
    {
      value: "2",
      lable: "Monthly",
    },
    {
      value: "3",
      lable: "Yearly",
    },
  ];

  const [country, setCountry] = useState("1");

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      maxHeight={200}
      value={country}
      data={local_data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select chart"
      searchPlaceholder="Search..."
      onChange={(event: any) => {
        setCountry(event.value);
      }}
    />
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 150,
    backgroundColor: "#EEEEEE",
    paddingHorizontal: 8,
    borderWidth: 1,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "red",
    fontFamily: fonts.regular,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
});

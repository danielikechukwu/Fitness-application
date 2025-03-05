import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SelectCountry } from "react-native-element-dropdown";
import fonts from "@/constants/fonts";
import colors from "@/constants/colors";

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

  const [chart, setChart] = useState<string>("1");

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      containerStyle={styles.containerStyle}
      iconColor={colors.white}
      activeColor={colors.gray3}
      iconStyle={styles.icon}
      maxHeight={200}
      fontFamily={fonts.regular}
      accessibilityLabel={chart}
      value={chart}
      data={local_data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Charts"
      searchPlaceholder="Search..."
      onChange={(event: any) => {
        setChart(event.value);
        console.log(event.value);
      }}
    />
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  dropdown: {
    height: 48,
    width: 130,
    backgroundColor: colors.brand,
    paddingHorizontal: 8,
    borderRadius: 25,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.regular,
    marginLeft: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 14,
    color: colors.white,
  },
  icon: {
    width: "24%",
    marginRight: 8,
  },
  containerStyle: {
    backgroundColor: colors.black
  }
});

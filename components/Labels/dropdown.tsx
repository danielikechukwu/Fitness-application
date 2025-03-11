import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import colors from "../../constants/colors";
import ILabel from "../../types/label";

const DropDown: React.FC<ILabel> = (props: ILabel) => {

  const [value, setValue] = useState();

  return (
    <View style={styles.container}>
      <Image
        tintColor={colors.gray2}
        resizeMode="contain"
        source={props.icon}
        style={styles.img}
      />
      <View style={{ width: "95%" }}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
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
  }

} as const);

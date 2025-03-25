import { StyleSheet, View, Image, TextInput, Platform } from "react-native";
import React, { useState } from "react";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import ILabel from "../../types/label";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePickerLabel: React.FC<ILabel> = (props: ILabel) => {
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setOpen(Platform.OS === "ios"); //keep open for ios

    if (selectedDate) {
      setDate(selectedDate);
      console.log(selectedDate);
    }
  };

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
        value={date.toDateString()}
        onPress={() => setOpen(true)}
      />
      {open && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePickerLabel;

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

  img: {
    marginRight: "3%",
    width: 18,
    height: 18,
  },

  input: {
    flex: 1, // Takes the remaining space
    fontSize: 16,
    padding: 8,
    color: colors.black,
    fontFamily: fonts.regular,
    alignSelf: "center",
  },
} as const);

import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";

const RegisterStep1 = () => {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="white" />

      <View>

        <View style={styles.topText}>
          <Text style={{ fontFamily: fonts.regular, fontSize: 20 }}>
            Hey there,
          </Text>
          <Text style={{ fontFamily: fonts.bold, fontSize: 24 }}>
            Create an Account
          </Text>
        </View>

        <View style={styles.form}>

        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default RegisterStep1;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
      },

      topText: {
        flex: 1,
        alignItems: 'center',
        marginTop: '5%'
      },

      form: {

      }
});

import colors from '@/constants/colors';
import fonts from '@/constants/fonts';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

const HeartRate: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text style={{color: colors.black, marginLeft: '5%', fontFamily: fonts.semiBold, fontSize: 16}}>Heart Rate</Text>
      <Text style={{color: colors.brand, fontFamily: fonts.bold, marginLeft: '5%', fontSize: 18}}>78 BPM</Text>
      <View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default HeartRate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    borderRadius: 15,
    paddingBottom: '5%',
    backgroundColor: colors.border
  }
} as const);

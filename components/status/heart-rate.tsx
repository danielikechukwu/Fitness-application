import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-gifted-charts'
import { colors } from '@/constants/colors';

const HeartRate = () => {

    const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

  return (
    <View style={styles.container}>
      <LineChart areaChart data={data} pointerConfig={{}} />
    </View>
  )
}

export default HeartRate

const styles = StyleSheet.create({

    container: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: colors.border,
        borderRadius: 12,
    }
})
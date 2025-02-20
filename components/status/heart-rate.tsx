import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors';
import { LineChart } from 'react-native-gifted-charts';
// import { LineChart } from 'react-native-gifted-charts';

const HeartRate: React.FC = () => {

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
        backgroundColor: colors.border,
        flex: 1,
        borderRadius: 12,
            ...Platform.select({
              ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 15,
            }
            })

    }
} as const)
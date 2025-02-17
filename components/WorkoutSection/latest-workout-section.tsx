import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'
import { fonts } from '@/constants/fonts'

const LatestWorkoutSection:React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{color: colors.black, fontFamily: fonts.bold, fontSize: 16, marginLeft: '4%'}}>Latest Workout</Text>
        <Text style={{fontFamily: fonts.regular, fontSize: 12, color: colors.gray1, marginRight: '4%'}}>See more</Text>
      </View>

      <View>
        
      </View>
    </View>
  )
}

export default LatestWorkoutSection

const styles = StyleSheet.create({
  container: {
    flex: 1,
borderWidth: 1,

  }
} as const)
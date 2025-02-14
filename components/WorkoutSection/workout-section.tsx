import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WorkoutSection = () => {
  return (
    <View style={styles.container}>
      <Text>WorkoutSection</Text>
    </View>
  )
}

export default WorkoutSection

const styles = StyleSheet.create({
  container: {
    borderWidth: 1, 
    flex: 1
  }
} as const)
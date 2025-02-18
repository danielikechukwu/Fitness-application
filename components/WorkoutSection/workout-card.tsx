import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WorkoutCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>WorkCard</Text>
    </View>
  )
}

export default WorkoutCard

const styles = StyleSheet.create({

  container: {
    flex: 1,
    borderWidth: 1,
    marginTop: '5%'
  }
} as const)
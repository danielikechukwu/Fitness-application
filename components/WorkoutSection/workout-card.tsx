import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WorkoutCard: React.FC = () => {
  return (
    <View style={styles.container}>      
      <View><Text>WorkCard</Text></View>
      <View><Text>WorkCard</Text></View>
      <View><Text>WorkCard</Text></View>
    </View>
  )
}

export default WorkoutCard

const styles = StyleSheet.create({

  container: {
    flex: 1,
    borderWidth: 1,
    marginTop: '5%',
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '2%',
    paddingRight: '2%'
  }
} as const)
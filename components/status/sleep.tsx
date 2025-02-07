import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { fonts } from '@/constants/fonts'
import { colors } from '@/constants/colors'

const Sleep = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: fonts.bold, fontSize: 18}}>Sleep</Text>
      <Text style={{fontFamily: fonts.bold, fontSize: 18, color: colors.brand}}><Text style={{fontSize: 20}}>8</Text>h <Text>20</Text>m</Text>
      <Image source={require('../../assets/images/dashboard/sleep-graph.png')} style={{width: '100%'}} />
    </View>
  )
}

export default Sleep

const styles = StyleSheet.create({

    container: {
        borderWidth: 1,
        borderColor: 'red',
        width: '50%',
        padding: '5%'

    }
})
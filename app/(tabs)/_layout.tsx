import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home' />
      <Tabs.Screen name='activity' />
      <Tabs.Screen name='search' />
      <Tabs.Screen name='camera' />
      <Tabs.Screen name='profile' />
    </Tabs>
  )
}

export default RootLayout
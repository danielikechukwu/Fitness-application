import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const RegisterLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>        
        <Stack.Screen name='create-account' />
        <Stack.Screen name='complete-account' />
        <Stack.Screen name='benefit' />
    </Stack>
  )
}

export default RegisterLayout;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const RegisterLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name='step1' />
        <Stack.Screen name='step2' />
        <Stack.Screen name='step3' />
        <Stack.Screen name='step4' />
        <Stack.Screen name='step5' />
    </Stack>
  )
}

export default RegisterLayout

const styles = StyleSheet.create({})
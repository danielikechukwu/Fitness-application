import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'

const Index: React.FC = () => {

    const router = useRouter();

  return (
    <View>
      <Text>
        Welcome 
      </Text>
      <Button title='Next' onPress={() => router.push("/(tabs)/home")}/>
    </View>
  )
}

export default Index;
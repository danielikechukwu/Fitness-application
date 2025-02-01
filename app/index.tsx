import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'

const index = () => {

    const router = useRouter();

  return (
    <View>
      <Text>
        Welcome 
      </Text>
      <Button title='Next' onPress={() => router.push("/auth/login")}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Signup() {
  return (
    <View>
      <Text>Welcome to Signup Page</Text>
      <Stack.Screen options={{
            title:'Sign Up'
        }}></Stack.Screen>
    </View>
  )
}

const styles = StyleSheet.create({})
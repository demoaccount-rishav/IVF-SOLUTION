import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Login() {
  return (
    <View>
        <Stack.Screen options={{
            title:'Log In'
        }}></Stack.Screen>
      <Text>Welcome to login Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
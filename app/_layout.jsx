import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import '../global.css'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <Slot /> */}
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})
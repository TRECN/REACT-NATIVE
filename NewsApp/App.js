import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Tab=createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='all'/>
      <Tab.Screen name='Business'/>
      <Tab.Screen/>
      <Tab.Screen/>
      <Tab.Screen/>
    </Tab.Navigator>
  )
}

export default App

const styles = StyleSheet.create({})
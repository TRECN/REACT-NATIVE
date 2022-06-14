import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Tab=createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='All'/>
        <Tab.Screen name='Business'/>
        <Tab.Screen name='Health'/>
        <Tab.Screen name='Sports'/>
        <Tab.Screen name='Tech'/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
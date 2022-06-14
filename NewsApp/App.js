import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import All from './screens/All';
import Business from './screens/Business';
import Health from './screens/Health';
import Sports from './screens/Sports';
import Tech from './screens/Tech';

const Tab=createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='All' component={All}/>
        <Tab.Screen name='Business' component={Business}/>
        <Tab.Screen name='Health' component={Health}/>
        <Tab.Screen name='Sports'component={Sports}/>
        <Tab.Screen name='Tech' component={Tech}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
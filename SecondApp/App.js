//rnfes

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Quiz from './screens/Quiz'
import Result from './screens/Result'

const App = () => {
  return (
    <View>
      <Home/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{

    padding:20
    
  }

})
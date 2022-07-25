import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>
        <Text style={styles.text}>UBER</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    text:{
        fontSize:50,
        padding:30,
        color:'black'
    }
})
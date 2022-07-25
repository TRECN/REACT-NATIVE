import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const Home = () => {
  return (
    <SafeAreaView>
        <Text style={tw`pt-6 bg-blue-100`}>UBER</Text>
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
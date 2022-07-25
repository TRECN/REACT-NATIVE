import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-red-100 h-full`}>
        <Text style={[tw`p-10 text-red-500`]}>UBER</Text>
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
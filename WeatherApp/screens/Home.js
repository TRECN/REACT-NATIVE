import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { currLocation } from "../components/currLocation";


const Home = () => {

    

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        
          <currLocation/>
        
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
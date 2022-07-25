import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Image } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View style={tw`p-5`}>
     <Image 
         style={{width:100,height:100,resizeMode:'contain',}}
         source={{
             uri:'https://links.papareact.com/gzs',
         }}
     />
    </View>
     
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
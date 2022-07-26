import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env'

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View style={tw`p-5`}>
        {/* uber image */}
     <Image 
         style={{
             width:100,
             height:100,
             resizeMode:'contain'
            }}
         source={{
             uri:'https://links.papareact.com/gzs',
         }}
     />
     {/* navigation tabs */}
     <GooglePlacesAutocomplete
        styles={{
            container:{
                flex:0
            },
            textInput:{
                fontSize:18
            }
        }}
        query={{
            key:GOOGLE_MAPS_API_KEY,
            language:'en'
        }}
        placeholder='Where From?'
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
     />
     <NavOptions/>
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
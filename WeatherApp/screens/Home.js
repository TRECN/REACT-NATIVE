import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { useState,useEffect } from 'react'
import * as Location from "expo-location";


const Home = () => {
  const [location,setLocation] = useState();

    const getLocation = async()=>{
        try{
            const {status} = await Location.requestForegroundPermissionsAsync();
            if(status) {
                const {
                    coords:{long,lat},
                }=await Location.getCurrentPositionAsync();
                setLocation({long,lat});
            }
        }catch(er){
            console.log(er);
        }
    }
    useEffect(()=>{
       getLocation(); 
    },[])
    

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
        <View>
          <Text style={tw`text-lg `}>{JSON.stringify(location)}</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
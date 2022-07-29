import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import * as Location from "expo-location";

const currLocation = () => {

    const [location,setLocation] = useState();

    const getLocation = async()=>{
        try{
            const {status} = await Location.requestPermissionsAsync();
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
    <View>
      <Text>{JSON.stringify(location)}</Text>
    </View>
  )
}

export default currLocation
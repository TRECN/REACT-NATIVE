import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { useState,useEffect } from 'react'
import * as Location from "expo-location";


const Home = () => {
  const [long,setLong]=useState();
  const [lat,setLat]=useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLat(latitude);
      setLong(longitude);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <SafeAreaView style={tw`bg-white h-full `}>
        <View >
          <Text style={tw`text-lg p-10`}>{long}</Text>
          <Text style={tw`text-lg p-10`}>{lat}</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
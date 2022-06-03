import React from "react";
import { Text,View,TextInput } from "react-native";

const Cat =(props)=>{
  return (
    <View style={
        {
            display:"flex",
            justifyContent:'center',
            alignItems:'center'
        }
    }>
      <Text>{props.name}</Text>
    </View>
      
  );
}

export default Cat


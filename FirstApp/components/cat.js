import React from "react";
import { Text,View,Image} from "react-native";

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
      <Image source={{
        uri:"https://reactnative.dev/docs/assets/p_cat1.png"
      }}
      style={{width:200,height:200}}
      />
    </View>
      
  );
}

export default Cat


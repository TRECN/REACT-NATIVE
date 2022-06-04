import React, { useState } from "react";
import { Text,View,Button} from "react-native";

const Cat =(props)=>{
  const [isHungry,setIsHungry]=useState(true);

  return (
    // <View style={
    //     {
    //         display:"flex",
    //         justifyContent:'center',
    //         alignItems:'center'
    //     }
    // }>
    //   <Text>{props.name}</Text>
    //   <Image source={{
    //     uri:"https://reactnative.dev/docs/assets/p_cat1.png"
    //   }}
    //   style={{width:200,height:200}}
    //   />
    // </View>

    <View 
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Text>I am {props.name}, and i am {isHungry ? "hungry":"full"}</Text>
      <Button
        onPress={()=>{
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "pour me some milk":"thank you!"}
        />
        <View 
          style={{margin:10,  display:"flex", justifyContent:"center", alignItems:"center"}}
        >
        <Button
          onPress={()=>{
            setIsHungry(true)
          }}
          title={"reset"}
        />
        </View>
    </View>
      
  );
}

export default Cat


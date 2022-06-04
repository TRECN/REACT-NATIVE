import React, { useState } from "react";
import { Text,View,Image} from "react-native";

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

    <View>
      <Text>I am {props.name}, and i am {isHungry ? "hungry":"full"}</Text>
      <Button
        onPress={()=>{
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "pour me some milk":"thank you!"}
        />
    </View>
      
  );
}

export default Cat


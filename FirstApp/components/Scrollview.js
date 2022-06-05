import React from "react";
import { ScrollView, Text } from "react-native";

const logo={
    uri:"https://reactnative.dev/img/tiny_logo.png",
    width:64,
    height:64
}

const Scrollview =()=>{
    return(
        <ScrollView>
            <Text
                style={{fontSize:96}}
            >Scroll me plz</Text>
        </ScrollView>
    );
}

export default Scrollview;
import { StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

const screen = Dimensions.get("window")
  const ButtonWidth=screen.width/4;

const ButtonComp = ({onPress,title}) => {

  

  return (
    <TouchableOpacity onPress={onPress}
        style={styles.Btn}
    >
        <Text style={{color:'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    Btn:{
        backgroundColor:'#333333',
        borderRadius:Math.floor(ButtonWidth),
        flex:1,

        justifyContent:'center',
        alignItems:'center',
        height:Math.floor(ButtonWidth-10),
        margin:5
    }
})
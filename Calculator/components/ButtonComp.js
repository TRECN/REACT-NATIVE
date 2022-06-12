import { StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

const screen = Dimensions.get("window")
  const ButtonWidth=screen.width/4;

const ButtonComp = ({onPress,title}) => {

  const buttonStyle=[styles.Btn];
  const textStyle=[styles.text]

  return (
    <TouchableOpacity onPress={onPress}
        style={buttonStyle}
    >
        <Text style={textStyle}>{title}</Text>
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
    },
    text:{
      color:'#fff',
      fontSize:25
    },
    textSecond:{
      color:'#060606'
    },
    BtnDouble:{
      width:screen.width/2-10,
      flex:0,
      alignItems:'flex-start',
      paddingLeft:40
    }
})
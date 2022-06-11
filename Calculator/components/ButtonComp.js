import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

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
        paddingHorizontal:30,
        margin:10,

        backgroundColor:'black',
        borderWidth:1,
        borderRadius:10
    }
})
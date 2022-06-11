import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const ButtonComp = ({onPress,title}) => {
  return (
    <TouchableOpacity onPress={onPress}
        style={styles.Btn}
    >
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    Btn
})
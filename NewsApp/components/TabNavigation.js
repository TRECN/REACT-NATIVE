import { StyleSheet, Text, View } from 'react-native'
import {MaterialComunityIcons} from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const TabNavigation = ({index,setIndex}) => {
  return (
    <View style={{...styles.container,backgroundColor:'#282c35'}}>
      {index==='0'?
        <TouchableOpacity>
          <Text>
            <MaterialComunityIcons/>
          </Text>
        </TouchableOpacity>  
    }
    </View>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
    container:{
        
    }
})
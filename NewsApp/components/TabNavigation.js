import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import React from 'react'

const TabNavigation = ({index,setIndex}) => {
  return (
    <View style={{...styles.container,backgroundColor:'#282c35'}}>
      {index===0?
        (<TouchableOpacity style={styles.left}>
          <Text style={{...styles.text, color:'black'}}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
          </Text>
        </TouchableOpacity>):(
          <TouchableOpacity style={styles.left} onPress={()=>{setIndex(0)}}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
            <Text style={{...styles.text, color:'black'}}>Discover</Text>
          </TouchableOpacity>
        ) 
    }
    </View>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:10,  
      alignItems:'center',
      borderBottomColor:'black',
      borderBottomWidth:0.5,
    },
    left:{ 
      flexDirection:'row',
      alignItems:'center',
      width:80,
      justifyContent: 'space-between',
    },
    text:{
      fontSize:16,
    }
})
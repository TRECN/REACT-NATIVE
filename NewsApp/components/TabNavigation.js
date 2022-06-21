import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const TabNavigation = ({index,setIndex}) => {
  return (
    <View style={{...styles.container,backgroundColor:'#282c35'}}>
      {index==='0'?
        <TouchableOpacity style={styles.left}>
          <Text style={{...styles.text, color:'black'}}>
            <MaterialCommunityIcons
              name='theme-light-dark'
              size={24}
              color='#007FFF'
            />
          </Text>
        </TouchableOpacity>:<></>  
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
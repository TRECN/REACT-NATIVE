import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import React from 'react'

const TabNavigation = ({index,setIndex}) => {
  return (
    <View style={{...styles.container,backgroundColor:'#282c35'}}>
      
    <Text style={{...styles.center,color:'white'}}>
      {index?'News Feed':'Discover'}
      </Text>
    
    {index?
      (<TouchableOpacity style={styles.right} onPress={()=>{setIndex(1)}}>
        <MaterialCommunityIcons name="reload" size={24} color="#007FFF" />
      </TouchableOpacity>)
      :(
        <TouchableOpacity style={styles.left} onPress={()=>{setIndex(1)}}>
        <Text style={{...styles.text, color:'white'}}>MyFeed</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#007FFF" />
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
    right:{ 
      width:80,
      alignItems:'flex-end'
    },
    text:{
      fontSize:16,
    },
    center:{
      paddingBottom:6,
      borderBottomColor:'#007FFF',
      borderBottomWidth:5,
      borderRadius:10,
      fontSize:16,
      fontWeight:'600'
    }
})

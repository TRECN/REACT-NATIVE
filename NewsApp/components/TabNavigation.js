import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import React,{ useState } from 'react'

const TabNavigation = ({index,setIndex}) => {

  const [mode,setMode]=useState(true);
  const modeStyle={
    color:'',
  };

  const clicked=()=>{
    setMode(mode?false:true);
    if(mode)
      modeStyle.push(styles.dark);
    else
      modeStyle.push(styles.light);
  }

  return (
    <View style={{...styles.container,}}>
      {index===0?
        (<TouchableOpacity style={styles.left} onPress={()=>clicked()}>
          <Text style={{...styles.text, color:'black'}}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>):(
          <TouchableOpacity style={styles.left} onPress={()=>{setIndex(0)}}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="#007FFF" />
            <Text style={{...styles.text, color:'white'}}>Discover</Text>
          </TouchableOpacity>
        ) 
    }

    <Text style={{...styles.center,color:"white"}}>{index?"MyFeed":"Discover"}</Text>
   

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
    },
    dark:{
      color:'#007FFF',
    },
    light:{
      color:'white'
    }
    
})

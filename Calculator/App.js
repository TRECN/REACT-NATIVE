import { StyleSheet, Text, View,StatusBar,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Btn from './components/ButtonComp'
import Row from './components/Row'



export default App

const styles = StyleSheet.create({
    calc:{
      color:'#fff',
      fontSize:30,
      textAlign:'right',
      marginRight:20,
      marginTop:40
    },
    result:{
      color:'#808080',
      fontSize:20,
      textAlign:'right',
      marginRight:20,
      marginBottom:60,
      marginTop:40
    },
    container:{
      flex:1,
      flexDirection:'column',

      backgroundColor:'#060606'
    },
    operator:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },  
    digits:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center'

    },


})
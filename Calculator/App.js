import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Btn from './components/ButtonComp'

const App = () => {

  const createDigits=()=>{
    const digits=[];
    for(let i=1;i<10;i++){
      digits.push(
        <Btn  title={i.toString()}/>
      )
    }
    return digits
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>0</Text>
      </View>
      <View style={styles.operator}>
        <Btn title='/'/>
        <Btn title='*'/>
        <Btn title='+'/>
        <Btn title='-'/>

        <Btn title='DEL'/>

      </View>
      <View style={styles.digits}>

        {createDigits()}
        <Btn  title='0'/>
        <Btn  title='.'/>
        <Btn  title='='/>
      </View>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({

    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    operator:{
      flex:1,
      flexDirection:'row',

    },  
    digits:{
      flex:1,
      flexWrap:'wrap'
    },

})
import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Btn from './components/ButtonComp'

const App = () => {

  const createDigits=()=>{
    const digits=[];
    for(let i=1;i<10;i++){
      digits.push(
        <Btn title={i.toString()}/>
      )
    }
    return digits
  }

  return (
    <View >
      <View>
        <Text>0</Text>
      </View>
      <View>
        <Btn title='/'/>
        <Btn title='*'/>
        <Btn title='+'/>
        <Btn title='-'/>

        <Btn title='DEL'/>

      </View>
      <View>

        {createDigits()}
        <Btn title='0'/>
        <Btn title='.'/>
        <Btn title='='/>
      </View>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  
})
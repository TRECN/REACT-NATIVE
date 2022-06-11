import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const App = () => {

  const createDigits=()=>{
    const digits=[];
    for(let i=1;i<10;i++){
      digits.push(
        <Button title={i.toString()}/>
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
        <Button title='/'/>
        <Button title='*'/>
        <Button title='+'/>
        <Button title='-'/>

        <Button title='DEL'/>

      </View>
      <View>

        {createDigits()}
        <Button title='0'/>
        <Button title='.'/>
        <Button title='='/>
      </View>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  
})
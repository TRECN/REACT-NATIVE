import { StyleSheet, Text, View,StatusBar,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Btn from './components/ButtonComp'
import Row from './components/Row'

const App = () => {

  const [calc,setCalc]=useState("");
  const [result,setResult]=useState("")

  const createDigits=(n,n1)=>{
    const digits=[];
    for(let i=n;i<=n1;i++){
      digits.push(
        <Btn 
        key={i} 
        calc={calc}
          setCalc={setCalc}
          result={result}
          setResult={setResult}
        
        title={i.toString()}/>
      )
    }
    return digits
  }
  

  return (
    // onPress, title, size, theme
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <ScrollView>
      <View >
      <Text style={styles.calc}>
        {calc?calc:'0'}
        </Text>
        <Text style={styles.result}>={result}</Text>
      </View>
      </ScrollView>
      
      
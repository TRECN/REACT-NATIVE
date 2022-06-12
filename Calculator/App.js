import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import Btn from './components/ButtonComp'
import Row from './components/Row'

const App = () => {

  const createDigits=(n)=>{
    const digits=[];
    for(let i=1;i<n;i++){
      digits.push(
        <Btn key={i} title={i.toString()}/>
      )
    }
    return digits
  }

  return (
    // onPress, title, size, theme
    <View style={styles.container}>
      <View >
        <Text>0</Text>
      </View>
      <Row>
        <Btn title={'DEL'} size={''}/>
      </Row>
        
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
      justifyContent:'center',
      alignItems:'center'
    },  
    digits:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center'

    },

})
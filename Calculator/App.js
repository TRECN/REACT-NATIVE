import { StyleSheet, Text, View,StatusBar} from 'react-native'
import React from 'react'
import Btn from './components/ButtonComp'
import Row from './components/Row'

const App = () => {

  const createDigits=(n,n1)=>{
    const digits=[];
    for(let i=n;i<=n1;i++){
      digits.push(
        <Btn key={i} title={i.toString()}/>
      )
    }
    return digits
  }

  return (
    // onPress, title, size, theme
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      
      <View >
        <Text style={styles.result}>0</Text>
      </View>
      <Row>
        <Btn 
          title='AC'
          theme='secondary'
        />
        <Btn 
          title='DEL'
          theme='secondary'
        />
        <Btn 
          title='%'
          theme='secondary'
        />
        <Btn 
          title='/'
          theme='secondary'
        />
      </Row>
      <Row>
        {createDigits(1,3)}
        <Btn 
          title='x'
          theme='secondary'
        />
      </Row>
      <Row>
        {createDigits(4,6)}
        <Btn 
          title='-'
          theme='secondary'
        />
      </Row>
      <Row>
        {createDigits(7,9)}
        <Btn 
          title='+'
          theme='secondary'
        />
      </Row>
      <Row>
        <Btn 
          title='0'
        />
        <Btn title='.' />
        <Btn 
          title='='
          size='double'
          theme='equal'

        />
      </Row>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
    result:{
      color:'#fff',
      fontSize:60
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
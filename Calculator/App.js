import { StyleSheet, Text, View,StatusBar} from 'react-native'
import React,{useState} from 'react'
import Btn from './components/ButtonComp'
import Row from './components/Row'

const App = () => {

  const [calc,setCalc]=useState('');
  const [result,setResult]=useState('')

  const createDigits=(n,n1)=>{
    const digits=[];
    for(let i=n;i<=n1;i++){
      digits.push(
        <Btn 
        key={i} 
        onPress={()=>updateCalc(i.toString())}
        title={i.toString()}/>
      )
    }
    return digits
  }

  return (
    // onPress, title, size, theme
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      
      <View >
      <Text style={styles.result}>{result?({result}):''}{calc||'0'}</Text>
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
          onPress={()=>updateCalc('%')}
          title='%'
          theme='secondary'
        />
        <Btn 
          onPress={()=>updateCalc('/')}
          title='/'
          theme='secondary'
        />
      </Row>
      <Row>
        
        <Btn 
          onPress={()=>updateCalc('1')}
          title='1'
          theme='secondary'
        />
      </Row>
      {/* <Row>
        {createDigits(4,6)}
        <Btn 
          onPress={()=>updateCalc('-')}
          title='-'
          theme='secondary'
        />
      </Row>
      <Row>
        {createDigits(7,9)}
        <Btn 
          onPress={()=>updateCalc('+')}
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
      </Row> */}
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
    result:{
      color:'#fff',
      fontSize:60,
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
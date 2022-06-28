
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import InshortTab from './components/InshortsTab';
import React,{ useState } from 'react'

export default function App() {
  const [mode,setMode]=useState(true);
  const [col,setCol]=useState('');

  if(mode)
      setCol('#282C35')
    else
      setCol('white')

  return (
    <View style={{...styles.container,backgroundColor:col}}>
      <InshortTab 
        mode={mode}
        setMode={setMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider>
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Uber</Text>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:50,
    marginLeft:50,
  
  },
});

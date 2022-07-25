import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
          <Home/>    
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

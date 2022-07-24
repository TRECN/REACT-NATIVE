import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Uber</Text>
      <StatusBar style="auto" />
    </View>
  );
}


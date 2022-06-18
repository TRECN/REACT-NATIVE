
import { StyleSheet, Text, View ,StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Rishabh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
});

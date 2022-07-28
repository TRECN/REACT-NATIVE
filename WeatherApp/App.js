import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Home from './screens/Home';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <SafeAreaView >
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '	#C0C0C0',
  },
});

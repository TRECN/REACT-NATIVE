import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
    marginLeft: 50,
  },
});

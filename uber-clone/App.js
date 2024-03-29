import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{
                headerShown:false,
              }}
            />
            <Stack.Screen 
              name="MapScreen" 
              component={MapScreen} 
              options={{
                headerShown:false,
              }}
            />
            <Stack.Screen 
              name="EatsScreen" 
              component={EatsScreen} 
              options={{
                headerShown:false,
              }}
            />
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

import { StatusBar, Text, View } from "react-native";
import { Home } from "./screens/Home";
import { FullPost } from "./screens/FullPost";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Главная" }}
        />

        <Stack.Screen
          name="FullPost"
          component={FullPost}
          options={{ title: "Пост" }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

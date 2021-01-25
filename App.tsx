<script src="http://192.168.1.123:8097"></script>;
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingList from "./components/ShoppingList";
import ShoppingDetails from "./components/ShoppingDetails";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShoppingList">
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingList}
          options={{ title: "Catalog" }}
        />
        <Stack.Screen name="ShoppingDetails" component={ShoppingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from "react";
import { View, Text, Button } from "react-native";

function ShoppingDetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("ShoppingDetails")}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("ShoppingList")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default ShoppingDetails;

import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShoppingItem from "./ShoppingItem";

function ShoppingList({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
            Shopping List
          </Text>
          <FlatList
            data={data}
            keyExtractor={({ x, id }) => id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ backgroundColor: "transparent" }}
                onPress={() => {
                  navigation.navigate("ShoppingDetails", {
                    itemId: 86,
                    otherParam: "anything you want here",
                  });
                }}
              >
                <View>
                  <Text>{item.title}</Text>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text>{item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

export default ShoppingList;

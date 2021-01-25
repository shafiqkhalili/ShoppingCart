import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShoppingItem from "./ShoppingItem";
import { createStackNavigator } from "@react-navigation/stack";

type RootStackParamList = {
  ShoppingList: undefined; // undefined because you aren't passing any params to the home screen
  ShoppingDetails: { item: any };
};

const Stack = createStackNavigator<RootStackParamList>();

// Home.tsx
import { StackNavigationProp } from "@react-navigation/stack";
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ShoppingList"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ShoppingList = ({ navigation }: Props) => {
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
        <FlatList
          data={data}
          keyExtractor={({ x, id }) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={() => {
                navigation.navigate("ShoppingDetails", {
                  item: item,
                });
              }}
            >
              <View style={styles.cardView}>
                <View style={styles.imageView}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                </View>
                <View style={styles.detailsView}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>$ {item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cardView: {
    display: "flex",
    padding: 24,
    backgroundColor: "#e2dbe2",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  imageView: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
  },
  detailsView: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  price: {
    color: "#52ad52",
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 20,
  },
});
export default ShoppingList;

import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type ItemProps = {
  title: String;
  description: String;
  category: String;
  imageUrl: String;
  price: Number;
};
function ShoppingItem({
  title,
  description,
  category,
  imageUrl,
  price,
}: ItemProps) {
  const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  console.log({ title, description, category, imageUrl, price });

  // useEffect(() => {
  //     fetch('https://fakestoreapi.com/products/'+id)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <TouchableOpacity style={{ backgroundColor: "transparent" }}>
      <View style={styles.listItemContainer}>
        <Text style={styles.pokeItemHeader}>{title}</Text>
        <Image source={{ uri: imageUrl }} style={styles.pokeImage} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#d6aeae",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  pokeItemHeader: {
    color: "#020202",
    fontSize: 24,
  },
  pokeImage: {
    backgroundColor: "transparent",
    height: 50,
    width: 50,
  },
});

export default ShoppingItem;

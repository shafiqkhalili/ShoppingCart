import React, { useEffect, FC, ReactElement } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

type item = {
  category: String;
  description: String;
  image: String;
  price: String;
  title: String;
};

const ShoppingDetails: FC<item> = ({ route, navigation }): ReactElement => {
  const item = route.params.item;
  const { category, description, image, price, title } = { ...item };
  console.log(category, description, image, price, title);

  const ChangeThisTitle = (titleText) => {
    const { setParams } = navigation;
    setParams({ title: titleText });
  };

  useEffect(() => {
    return () => {
      ChangeThisTitle("test");
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.titleView}>
        <Text>{title}</Text>
      </View>
      <View>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text>{description}</Text>
      </View>
      <View>
        <Text style={styles.category}>Category:{category}</Text>
      </View>
      <Button title="Go home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imageView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
  titleView: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },
  descriptionTitle: {
    fontWeight: "bold",
  },
  description: {
    paddingBottom: 20,
  },
  price: {
    color: "#52ad52",
    display: "flex",
    alignItems: "flex-end",
    paddingBottom: 20,
  },
  category: {
    fontWeight: "bold",
    paddingBottom: 20,
    color: "gray",
  },
});
export default ShoppingDetails;

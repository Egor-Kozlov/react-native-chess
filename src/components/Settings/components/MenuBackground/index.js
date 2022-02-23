import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView, StatusBar, Image, TouchableOpacity } from "react-native";
// import backgroundsList from "./backgroundsList";

const DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
];

const Item = ({ title }) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity activeOpacity={0.7} style={styles.item}>
      <Image source={require("../../../../img/backgrounds/menu-background-1.jpg")} resizeMode="cover" style={styles.image} />
      <Image style={styles.picked} source={require("../../../../img/icons/correct.png")} />
    </TouchableOpacity>
  </View>
);

const MenuBackground = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} style={styles.list} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    width: "100%",
    height: 300,
    paddingVertical: 7,
    marginVertical: 6,
    alignItems: "center",
  },
  item: {
    padding: 10,
    borderRadius: 15,
    width: 175,
    height: "100%",
    backgroundColor: "#dedede",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  picked: {
    position: "absolute",
    bottom: 33,
    left: 67,
    width: 36,
    height: 36,
  },
});

export default MenuBackground;

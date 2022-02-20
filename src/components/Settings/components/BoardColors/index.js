import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import colorThemeList from "./colorThemeList";

const BoardColors = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      titleColor={item.titleColor}
      backgroundSRC={item.background}
      whiteCell={item.whiteCell}
      blackCell={item.blackCell}
      borderCell={item.borderCell}
    />
  );

  return <FlatList data={colorThemeList} renderItem={renderItem} keyExtractor={(item) => item.id} />;
};

export default BoardColors;

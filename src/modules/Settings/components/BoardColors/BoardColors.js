import React, { useContext } from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import colorThemeList from "./colorThemeList";
import settingsContext from "../../../../context/settingsContext";

const keyExtractor = (item) => item.id;

const BoardColors = () => {
  const { pickedTheme, setPickedTheme } = useContext(settingsContext);

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      titleColor={item.titleColor}
      backgroundSRC={item.background}
      whiteCell={item.whiteCell}
      blackCell={item.blackCell}
      borderCell={item.borderCell}
      pickedTheme={pickedTheme}
      setPickedTheme={setPickedTheme}
      checked={pickedTheme === item.title}
    />
  );

  return <FlatList data={colorThemeList} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

export default BoardColors;

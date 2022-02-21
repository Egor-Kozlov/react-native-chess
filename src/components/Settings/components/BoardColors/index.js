import React, { useContext } from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import colorThemeList from "./colorThemeList";
import SettingsContext from "../../../../SettingsContext";

const BoardColors = () => {
  const { pickedTheme, setPickedTheme } = useContext(SettingsContext);

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
    />
  );

  return (
    <FlatList
      data={colorThemeList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default BoardColors;

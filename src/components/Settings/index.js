import { FlatList } from "react-native";
import React from "react";
import SettingsItem from "./components/SettingsItem";

const SETTINGS_ITEMS = [
  {
    id: "MenuBackground",
    title: "The background",
  },
  {
    id: "PiecesStyle",
    title: "Pieces style",
  },
  {
    id: "BoardColors",
    title: "Board Colors",
  },
];

const Settings = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <SettingsItem navigation={navigation} title={item.title} id={item.id} />
  );

  return (
    <FlatList
      data={SETTINGS_ITEMS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Settings;

import { FlatList } from "react-native";
import React, { useCallback } from "react";
import SettingsItem from "./components/SettingsItem/SettingsItem";

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

const keyExtractor = (item) => item.id;

const Settings = ({ navigation }) => {
  const renderItem = ({ item }) => <SettingsItem navigation={navigation} title={item.title} id={item.id} />;

  return <FlatList data={SETTINGS_ITEMS} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

export default Settings;

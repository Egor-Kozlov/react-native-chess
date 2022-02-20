import { FlatList } from "react-native";
import React from "react";
import SettingsItem from "./components/SettingsItem";

const SETTINGS_ITEMS = [
  {
    id: "1",
    title: "The background",
  },
  {
    id: "2",
    title: "Pieces style",
  },
  {
    id: "3",
    title: "Board Colors",
  },
];

const Settings = ({ navigation }) => {
  const renderItem = ({ item }) => <SettingsItem navigation={navigation} title={item.title} />;

  return <FlatList data={SETTINGS_ITEMS} renderItem={renderItem} keyExtractor={(item) => item.id} />;
};

export default Settings;

import React, { useContext } from "react";
import { FlatList } from "react-native";
import SettingsContext from "../../../../context/SettingsContext";
import backgroundsList from "./backgroundsList";
import Item from "./Item";
import styles from "./styles";

const MenuBackground = () => {
  const { mainBackgroundSRC, setMainBackgroundSRC } = useContext(SettingsContext);

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      backgroundSRC={item.backgroundSRC}
      checked={mainBackgroundSRC === item.backgroundSRC ? true : false}
      setMainBackgroundSRC={setMainBackgroundSRC}
    />
  );

  return <FlatList data={backgroundsList} renderItem={renderItem} keyExtractor={(item) => item.id} style={styles.list} />;
};

export default MenuBackground;

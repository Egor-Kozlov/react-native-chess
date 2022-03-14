import React, { useContext } from "react";
import { FlatList } from "react-native";
import settingsContext from "../../../../context/settingsContext";
import backgroundsList from "./backgroundsList";
import Item from "./Item";
import styles from "./styles";

const keyExtractor = (item) => item.id;

const MenuBackground = () => {
  const { mainBackgroundSRC, setMainBackgroundSRC } = useContext(settingsContext);

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      backgroundSRC={item.backgroundSRC}
      checked={mainBackgroundSRC === item.backgroundSRC ? true : false}
      setMainBackgroundSRC={setMainBackgroundSRC}
    />
  );

  return <FlatList data={backgroundsList} renderItem={renderItem} keyExtractor={keyExtractor} style={styles.list} />;
};

export default MenuBackground;

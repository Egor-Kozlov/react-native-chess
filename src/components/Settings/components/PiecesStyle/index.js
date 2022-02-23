import React, { useContext } from "react";
import { FlatList } from "react-native";
import SettingsContext from "../../../../context/SettingsContext";

import Item from "./Item";
import piecesList from "./piecesList";
import styles from "./styles";

const PiecesStyle = () => {
  const { whiteColor, blackColor, borderColor, pieces, setPieces } = useContext(SettingsContext);

  const renderItem = ({ item }) => (
    <Item
      whiteColor={whiteColor}
      blackColor={blackColor}
      borderColor={borderColor}
      checked={true}
      kw={item.kw}
      qw={item.qw}
      rw={item.rw}
      bw={item.bw}
      nw={item.nw}
      pw={item.pw}
      kb={item.kb}
      qb={item.qb}
      rb={item.rb}
      bb={item.bb}
      nb={item.nb}
      pb={item.pb}
      setPieces={setPieces}
      id={item.id}
      checked={item.id === pieces ? true : false}
    />
  );

  return <FlatList data={piecesList} renderItem={renderItem} keyExtractor={(item) => item.id} style={styles.list} />;
};

export default PiecesStyle;

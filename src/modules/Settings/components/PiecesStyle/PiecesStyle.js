import React, { useContext } from "react";
import { FlatList } from "react-native";
import settingsContext from "../../../../context/settingsContext";

import Item from "./Item";
import piecesList from "./piecesList";
import styles from "./styles";

const keyExtractor = (item) => item.id;

const PiecesStyle = () => {
  const { whiteColor, blackColor, borderColor, pieces, setPieces } = useContext(settingsContext);

  const renderItem = ({ item }) => (
    <Item
      whiteColor={whiteColor}
      blackColor={blackColor}
      borderColor={borderColor}
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
      checked={item.id === pieces}
    />
  );

  return <FlatList data={piecesList} renderItem={renderItem} keyExtractor={(item) => item.id} style={styles.list} />;
};

export default PiecesStyle;

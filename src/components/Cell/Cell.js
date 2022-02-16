import { View } from "react-native";
import React from "react";
import Piece from "../Piece/Piece";
import styles from "./styles";

const Cell = ({ selected, traced, piece, color, h, v, onClick }) => {
  const selected_cell = selected ? styles.selected : "";
  const traced_cell = traced ? styles.traced : "";
  return (
    <View
      //ToDo classnames lib
      id={`${h} ${v}`}
      style={[styles.cell, styles[color]]}
      //   className={`${styles[color]} ${selected_cell} ${traced_cell}`}
      //   onClick={() => onClick(h, v)}
    >
      {piece ? <Piece piece={piece} /> : null}
    </View>
  );
};
export default Cell;

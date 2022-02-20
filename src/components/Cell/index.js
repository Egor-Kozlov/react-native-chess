import { Pressable } from "react-native";
import React from "react";
import Piece from "../Piece";
import styles from "./styles";

const Cell = ({ selected, traced, piece, color, h, v, onClick }) => {
  const selectedCell = selected ? styles.selected : null;
  const tracedCell = traced ? styles.traced : null;
  return (
    <Pressable
      //ToDo classnames lib
      id={`${h} ${v}`}
      style={[styles.cell, styles[color], selectedCell, tracedCell]}
      onPressIn={() => onClick(h, v)}
    >
      {piece ? <Piece piece={piece} /> : null}
    </Pressable>
  );
};
export default React.memo(Cell);

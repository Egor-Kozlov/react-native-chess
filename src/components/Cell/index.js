import { Pressable, StyleSheet } from "react-native";
import React, { useContext } from "react";
import BoardThemeContext from "../../BoardThemeContext";
import Piece from "../Piece";
import styles from "./styles";

const Cell = ({ selected, traced, piece, color, h, v, onClick }) => {
  const { whiteColor, blackColor, borderColor } = useContext(BoardThemeContext);
  console.log("borderColor: ", borderColor);
  const colorTheme = color === "w" ? whiteColor : blackColor;

  const selectedCell = selected ? styles.selected : null;
  const tracedCell = traced ? styles.traced : null;

  return (
    <Pressable
      //ToDo classnames lib
      id={`${h} ${v}`}
      style={[
        styles.cell,
        { backgroundColor: colorTheme },
        borderColor ? { borderWidth: StyleSheet.hairlineWidth, borderColor: borderColor } : null,
        selectedCell,
        tracedCell,
      ]}
      onPressIn={() => onClick(h, v)}
    >
      {piece ? <Piece piece={piece} /> : null}
    </Pressable>
  );
};
export default React.memo(Cell);

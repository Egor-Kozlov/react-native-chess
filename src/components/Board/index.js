import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import useChessBoard from "../../../utilities/chess_engine/hooks/useChessBoard";
import Cell from "../Cell";
import piecesPreset from "./services/piecesPreset";

import styles from "./styles";

const Board = () => {
  const [boardView, boardTurn, cellClick] = useChessBoard(piecesPreset);
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>Turn: {boardTurn}</Text>
      <View style={styles.boardContainer}>
        <View style={[styles.board, { height: width }]}>
          {boardView?.map((horisontal, h) => {
            return horisontal.map(({ traced, piece, color, selected }, v) => {
              return (
                <Cell
                  selected={selected}
                  traced={traced}
                  piece={piece}
                  key={`${v}${h}`}
                  v={v}
                  h={h}
                  color={color}
                  onClick={cellClick}
                />
              );
            });
          })}
        </View>
      </View>
    </View>
  );
};

export default Board;

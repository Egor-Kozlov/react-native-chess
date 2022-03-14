import { View, useWindowDimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Cell from "../Cell/Cell";
import piecesList from "../../modules/Settings/components/PiecesStyle/piecesList";
import settingsContext from "../../context/settingsContext";
import useMoveSound from "./useMoveSound";

import styles from "./styles";

const Board = ({ boardView, boardTurn, cellClick }) => {
  const [playMoveSound] = useMoveSound();
  const { pieces } = useContext(settingsContext);

  const { height, width } = useWindowDimensions();

  const piecesStyle = piecesList.find((el) => el.id === pieces);
  ///
  useEffect(() => {
    playMoveSound();
  }, [boardTurn]);

  ///
  return (
    <View style={styles.container}>
      {/* <Text>Turn: {boardTurn}</Text> */}
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
                  piecesStyle={piecesStyle}
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

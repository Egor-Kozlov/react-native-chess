import { View, Text, Dimensions } from "react-native";
import React from "react";
import useChessBoard from "./hooks/useChessBoard";
import Cell from "../Cell/Cell";

import styles from "./styles";

const windowWidth = Dimensions.get("window").width;

const preset = {
  turn: "w",
  pieces: {
    a1: { piece: "rw", move: 0 },
    b1: { piece: "nw", move: 0 },
    c1: { piece: "bw", move: 0 },
    d1: { piece: "qw", move: 0 },
    e1: { piece: "kw", move: 0 },
    f1: { piece: "bw", move: 0 },
    g1: { piece: "nw", move: 0 },
    h1: { piece: "rw", move: 0 },
    a2: { piece: "pw", move: 0 },
    b2: { piece: "pw", move: 0 },
    c2: { piece: "pw", move: 0 },
    d2: { piece: "pw", move: 0 },
    e2: { piece: "pw", move: 0 },
    f2: { piece: "pw", move: 0 },
    g2: { piece: "pw", move: 0 },
    h2: { piece: "pw", move: 0 },
    a7: { piece: "pb", move: 0 },
    b7: { piece: "pb", move: 0 },
    c7: { piece: "pb", move: 0 },
    d7: { piece: "pb", move: 0 },
    e7: { piece: "pb", move: 0 },
    f7: { piece: "pb", move: 0 },
    g7: { piece: "pb", move: 0 },
    h7: { piece: "pb", move: 0 },
    a8: { piece: "rb", move: 0 },
    b8: { piece: "nb", move: 0 },
    c8: { piece: "bb", move: 0 },
    d8: { piece: "qb", move: 0 },
    e8: { piece: "kb", move: 0 },
    f8: { piece: "bb", move: 0 },
    g8: { piece: "nb", move: 0 },
    h8: { piece: "rb", move: 0 },
  },
};

const Board = () => {
  const [boardView, boardTurn, cellClick] = useChessBoard(preset);

  return (
    <View style={styles.container}>
      <Text>Turn: {boardTurn}</Text>
      <View style={styles.boardContainer}>
        <View style={[styles.board, { height: windowWidth }]}>
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

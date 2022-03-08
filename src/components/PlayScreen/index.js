import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Board from "../Board";
import PlayerInfo from "./components/PlayerInfo";
import SettingsContext from "../../context/SettingsContext";
import useChessBoard from "../../../utilities/chess_engine/hooks/useChessBoard";
import piecesPreset from "../Board/services/piecesPreset";

const PlayScreen = () => {
  const { pickedTimer } = useContext(SettingsContext);
  const [boardView, boardTurn, cellClick] = useChessBoard(piecesPreset);

  const [firstMove, setFirstMove] = useState(false);

  return (
    <View style={styles.container}>
      <PlayerInfo isTurn={boardTurn === "b" ? true : false} playerName={"Black"} pickedTimer={pickedTimer} />
      <Board boardView={boardView} boardTurn={boardTurn} cellClick={cellClick} />
      <PlayerInfo
        isTurn={boardTurn === "w" ? true : false}
        boardTurn={boardTurn}
        playerName={"White"}
        pickedTimer={pickedTimer}
      />
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

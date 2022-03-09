import { StyleSheet, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import useOpenCloseModal from "../../hooks/useOpenCloseModal";
import Board from "../Board";
import PlayerInfo from "./components/PlayerInfo";
import SettingsContext from "../../context/SettingsContext";
import useChessBoard from "../../../utilities/chess_engine/hooks/useChessBoard";
import piecesPreset from "../Board/services/piecesPreset";
import GameResultModal from "./components/GameResultModal";

const PlayScreen = ({ navigation }) => {
  const { pickedTimer } = useContext(SettingsContext);
  const [boardView, boardTurn, cellClick] = useChessBoard(piecesPreset);
  const [firstMove, setFirstMove] = useState(false);
  const [timeOut, setTimeOut] = useState(false);
  const [modalVisible, openModal, closeModal] = useOpenCloseModal();

  useEffect(() => {
    if (timeOut) {
      openModal();
    }
  }, [timeOut]);

  return (
    <View style={styles.container}>
      <GameResultModal
        winPlayer={boardTurn === "b" ? "Whites" : "Blacks"}
        modalResultVisible={modalVisible}
        closeResultModal={closeModal}
        navigation={navigation}
      />
      <PlayerInfo isTurn={boardTurn === "b" ? true : false} playerName={"Black"} pickedTimer={pickedTimer} setTimeOut={setTimeOut} />
      <Board boardView={boardView} boardTurn={boardTurn} cellClick={cellClick} />
      <PlayerInfo
        isTurn={boardTurn === "w" ? true : false}
        boardTurn={boardTurn}
        playerName={"White"}
        pickedTimer={pickedTimer}
        setTimeOut={setTimeOut}
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

import { StyleSheet, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import useOpenClose from "../../hooks/useOpenClose";
import Board from "../../components/Board/Board";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import settingsContext from "../../context/settingsContext";
import useChessBoard from "../../../utilities/chess_engine/hooks/useChessBoard";
import piecesPreset from "../../components/Board/piecesPreset.json";
import GameResultModal from "./components/GameResultModal/GameResultModal";

const PlayScreen = ({ navigation }) => {
  const { pickedTimer } = useContext(settingsContext);
  const [boardView, boardTurn, cellClick] = useChessBoard(piecesPreset);
  const [firstMove, setFirstMove] = useState(false);
  const [timeOut, setTimeOut] = useState(false);
  const [modalVisible, openModal, closeModal] = useOpenClose();

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
      <PlayerInfo
        isTurn={boardTurn === "b" ? true : false}
        playerName={"Black"}
        pickedTimer={pickedTimer}
        setTimeOut={setTimeOut}
      />
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

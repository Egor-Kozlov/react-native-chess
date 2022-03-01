import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Board from "../Board";
import PlayerInfo from "./components/PlayerInfo";
import SettingsContext from "../../context/SettingsContext";

const PlayScreen = () => {
  const { pickedTimer } = useContext(SettingsContext);

  return (
    <View style={styles.container}>
      <PlayerInfo playerName={"Black"} pickedTimer={pickedTimer} />
      <Board />
      <PlayerInfo playerName={"White"} pickedTimer={pickedTimer} />
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

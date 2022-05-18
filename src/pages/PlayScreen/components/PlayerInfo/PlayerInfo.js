import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Timer from "../Timer/Timer";
import styles from "./styles";
import convertPickedTimerToNumber from "./convertPickedTimerToNumber";

const PlayerInfo = ({ isTurn, playerName, pickedTimer, setTimeOut }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.playerName}>{playerName}</Text>
      {pickedTimer ? (
        <Timer active={isTurn} pickedTimer={convertPickedTimerToNumber(pickedTimer)} setTimeOut={setTimeOut} />
      ) : null}
    </View>
  );
};

export default PlayerInfo;

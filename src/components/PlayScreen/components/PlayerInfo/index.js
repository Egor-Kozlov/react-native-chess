import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Timer from "../Timer";
import styles from "./styles";
import convertPickedTimerToNumber from "./convertPickedTimerToNumber";

const PlayerInfo = ({ playerName, pickedTimer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.playerName}>{playerName}</Text>
      {pickedTimer ? <Timer active={true} pickedTimer={convertPickedTimerToNumber(pickedTimer)} /> : null}
    </View>
  );
};

export default PlayerInfo;

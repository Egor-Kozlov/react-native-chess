import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Timer from "../Timer";

const PlayerInfo = ({ playerName, pickedTimer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.playerName}>{playerName}</Text>
      {pickedTimer ? <Timer pickedTimer={pickedTimer} /> : null}
    </View>
  );
};

export default PlayerInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    paddingVertical: 9,
    width: "100%",
    height: 65,
    backgroundColor: "#a3a3a3",
  },
  playerName: {
    color: "#dedede",
    fontWeight: "700",
    fontSize: 15,
  },
});

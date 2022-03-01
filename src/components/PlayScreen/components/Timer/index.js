import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Timer = ({ active, pickedTime, isTimeOut }) => {
  const [currentTimer, setCurrentTimer] = useState();

  return (
    <View style={[styles.container, active ? styles.active : styles.inActive]}>
      <Text style={styles.timer}>4:59</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: "100%",
    borderRadius: 6,
  },
  timer: {
    fontSize: 15,
    fontWeight: "500",
  },
  active: {
    backgroundColor: "#ededed",
  },
  inActive: {
    backgroundColor: "#919191",
  },
});

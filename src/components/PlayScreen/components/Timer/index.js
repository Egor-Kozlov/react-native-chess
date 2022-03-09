import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import useTimer from "../../../../hooks/useTimer";
import styles from "./styles";

const Timer = ({ active, pickedTimer, setTimeOut }) => {
  const [minutes, seconds, isTimeOut, setPause] = useTimer(pickedTimer.minutes, pickedTimer.seconds);

  useEffect(() => {
    if (!active) {
      setPause(true);
    } else {
      setPause(false);
    }
  }, [active]);

  useEffect(() => {
    if (isTimeOut) {
      setTimeOut(true);
    }
  }, [isTimeOut]);

  return (
    <View style={[styles.container, active ? styles.active : styles.inActive]}>
      <Text style={styles.timer}>
        {minutes}:{seconds}
      </Text>
    </View>
  );
};

export default Timer;

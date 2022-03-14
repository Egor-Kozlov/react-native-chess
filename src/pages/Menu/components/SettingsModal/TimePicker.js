import { View, Text } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import timePresets from "./timePresets";

const TimePicker = ({ timerValue, setTimerValue }) => {
  return (
    <Picker selectedValue={timerValue} onValueChange={(itemValue, itemIndex) => setTimerValue(itemValue)}>
      {timePresets.map((item) => (
        <Picker.Item label={item.label} value={item.timeSettings} key={item.label} />
      ))}
    </Picker>
  );
};

export default TimePicker;

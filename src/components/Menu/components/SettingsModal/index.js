import React, { useState, useEffect, useContext } from "react";
import { Modal, Text, View, Image, TouchableHighlight, Switch, TouchableOpacity } from "react-native";
import SettingsContext from "../../../../context/SettingsContext";
import COMPONENTS_LIST from "../../../COMPONENTS_LIST";
import styles from "./styles";
import TimePicker from "./TimePicker";
import timePresets from "./timePresets";

const removeIcon = require("../../../../img/icons/remove_icon.png");

const SettingsModal = ({ modalVisible, closeModal, navigation }) => {
  //switch
  const [isBoardFlipsEnabled, setIsBoardFlipsEnabled] = useState(false);
  const [isTimerEnabled, setIsTimerEnabled] = useState(false);
  const [timerValue, setTimerValue] = useState(false);

  const { setPickedTimer } = useContext(SettingsContext);

  //for correct time switcher and time picker work
  useEffect(() => {
    if (!isTimerEnabled) {
      setTimerValue(false);
    } else if (isTimerEnabled && !timerValue) {
      setTimerValue(timePresets[0].timeSettings);
    }
  }, [isTimerEnabled]);

  const toggleSwitch = (switcherSetState) => {
    switcherSetState((previousState) => !previousState);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableHighlight style={styles.remove} onPress={() => closeModal()} activeOpacity={0.5} underlayColor={null}>
            <Image source={removeIcon} style={styles.removeImg} />
          </TouchableHighlight>
          <Text style={styles.modalText}>Match settings:</Text>
          <View style={styles.itemsList}>
            <View style={styles.item}>
              <Text style={styles.title}>Board Flips</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#d6af74" }}
                thumbColor={isBoardFlipsEnabled ? "#ffd494" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(setIsBoardFlipsEnabled)}
                value={isBoardFlipsEnabled}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Timer</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#d6af74" }}
                thumbColor={isTimerEnabled ? "#ffd494" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(setIsTimerEnabled)}
                value={isTimerEnabled}
              />
            </View>
            {isTimerEnabled ? <TimePicker timerValue={timerValue} setTimerValue={setTimerValue} /> : null}
          </View>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setPickedTimer(timerValue);
              closeModal();
              navigation.navigate(COMPONENTS_LIST.PassPlay);
            }}
          >
            <Text style={styles.textStyle}>Start Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;

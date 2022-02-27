import React, { useState } from "react";
import { Modal, Text, Pressable, View, Image, TouchableHighlight, FlatList, Switch } from "react-native";
import COMPONENTS_LIST from "../../../COMPONENTS_LIST";
import styles from "./styles";

const removeIcon = require("../../../../img/icons/remove_icon.png");

const SettingsModal = ({ modalVisible, closeModal, navigation }) => {
  //switch
  const [isBoardFlipsEnabled, setIsBoardFlipsEnabled] = useState(false);
  const [isTimerEnabled, setIsTimerEnabled] = useState(false);

  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
          <Text style={styles.modalText}>Settings</Text>
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
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              closeModal();
              navigation.navigate(COMPONENTS_LIST.PassPlay);
            }}
          >
            <Text style={styles.textStyle}>Play</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;

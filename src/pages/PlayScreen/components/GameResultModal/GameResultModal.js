import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import SettingsModal from "../../../Menu/components/SettingsModal/SettingsModal";
import COMPONENTS_LIST from "../../../../router/componentList";
import useOpenCloseModal from "../../../../hooks/useOpenClose";

const GameResultModal = ({ winPlayer, modalResultVisible, closeResultModal, navigation }) => {
  const [modalVisible, openModal, closeModal] = useOpenCloseModal();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalResultVisible}
      onRequestClose={() => {
        closeResultModal();
      }}
    >
      <View style={styles.centeredView}>
        <SettingsModal modalVisible={modalVisible} closeModal={closeModal} navigation={navigation} />
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{winPlayer} won!</Text>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              openModal();
            }}
          >
            <Text style={styles.textStyle}>New game</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[styles.button, styles.buttonClose]}
            onPress={() => navigation.navigate(COMPONENTS_LIST.Menu)}
          >
            <Text style={styles.textStyle}>Back to menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GameResultModal;

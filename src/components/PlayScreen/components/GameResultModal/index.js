import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import SettingsModal from "../../../Menu/components/SettingsModal";
import COMPONENTS_LIST from "../../../COMPONENTS_LIST";
import useOpenCloseModal from "../../../../hooks/useOpenCloseModal";

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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    minWidth: 120,
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    backgroundColor: "#d6af74",
    alignSelf: "center",
    marginTop: "5%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

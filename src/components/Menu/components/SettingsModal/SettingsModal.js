import { Modal, StyleSheet, Text, Pressable, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";

const removeIcon = require("../../../../img/icons/remove_icon.png");

const SettingsModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableHighlight
            style={styles.remove}
            onPress={() => setModalVisible(!modalVisible)}
            activeOpacity={0.5}
            underlayColor={null}
          >
            <Image source={removeIcon} style={styles.removeImg} />
          </TouchableHighlight>
          <Text style={styles.modalText}>Settings</Text>
          <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;

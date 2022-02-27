import { Text, View, TouchableOpacity, TouchableHighlight, ImageBackground, Image } from "react-native";
import React, { useState, useContext } from "react";
import SettingsModal from "./components/SettingsModal";
import useOpenCloseModal from "../../hooks/useOpenCloseModal";
import COMPONENTS_LIST from "../COMPONENTS_LIST";
import styles from "./styles";
import SettingsContext from "../../context/SettingsContext";

const mainLogo = require("../../../src/img/icons/main_logo_2.png");
const settingIcon = require("../../img/icons/gear-3.png");

const Menu = ({ navigation }) => {
  const { mainBackgroundSRC } = useContext(SettingsContext);
  const [modalVisible, openModal, closeModal] = useOpenCloseModal();

  return (
    <View style={styles.container}>
      <SettingsModal modalVisible={modalVisible} closeModal={closeModal} navigation={navigation} />
      <ImageBackground source={mainBackgroundSRC} resizeMode="cover" style={styles.background}>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate(COMPONENTS_LIST.Settings)}
          style={styles.settingsContainer}
          underlayColor={null}
        >
          <Image source={settingIcon} style={styles.settingsIcon} />
        </TouchableHighlight>
        <View style={styles.buttonsContainer}>
          <Image source={mainLogo} style={styles.mainLogo} />
          {/* <TouchableOpacity onPress={() => navigation.navigate(COMPONENTS_LIST.PassPlay)} style={styles.button}>
            <Text>Pass &#38; Play</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => openModal()} style={styles.button}>
            <Text>Pass &#38; Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate(COMPONENTS_LIST.PassAFriend)}
            style={[styles.button, { opacity: 0.3 }]}
          >
            <Text>Play a Friend</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Menu;

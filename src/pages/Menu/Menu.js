import { Text, View, TouchableOpacity, TouchableHighlight, ImageBackground, Image } from "react-native";
import React, { useState, useContext } from "react";
import SettingsModal from "./components/SettingsModal/SettingsModal";
import useOpenClose from "../../hooks/useOpenClose";
import COMPONENTS_LIST from "../../router/componentList";
import styles from "./styles";
import settingsContext from "../../context/settingsContext";

const mainLogo = require("../../../assets/img/icons/main_logo_2.png");
const settingIcon = require("../../../assets/img/icons/gear-3.png");

const Menu = ({ navigation }) => {
  const { mainBackgroundSRC } = useContext(settingsContext);
  const [modalVisible, openModal, closeModal] = useOpenClose();

  return (
    <View style={styles.container}>
      <SettingsModal modalVisible={modalVisible} closeModal={closeModal} navigation={navigation} />
      <ImageBackground source={mainBackgroundSRC} resizeMode="cover" style={styles.background}>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate(COMPONENTS_LIST.Settings)}
          style={styles.settingsContainer}
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

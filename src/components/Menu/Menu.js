import { Button, Pressable, Text, View, TouchableOpacity, TouchableHighlight, ImageBackground, Image, Modal } from "react-native";
import { useState } from "react";
import SettingsModal from "./components/SettingsModal/SettingsModal";
import styles from "./styles";

const background = require("../../../src/img/backgrounds/menu-background-1.jpg");
const settingIcon = require("../../img/icons/gear-3.png");

const Menu = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <SettingsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="#DDDDDD"
          onPress={() => setModalVisible(true)}
          style={styles.settingsContainer}
          underlayColor={null}
        >
          <Image source={settingIcon} style={styles.settingsIcon} />
        </TouchableHighlight>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("PassPlay")} style={styles.button}>
            <Text>Pass &#38; Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { opacity: 0.3 }]}>
            <Text>Play a Friend</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Menu;

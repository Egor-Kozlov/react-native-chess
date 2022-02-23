import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const checkMarkSRC = require("../../../../img/icons/correct.png");

const Item = ({ backgroundSRC, checked, setMainBackgroundSRC }) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.item, checked ? { backgroundColor: "#cff0c9" } : "null"]}
      onPress={() => setMainBackgroundSRC(backgroundSRC)}
    >
      <Image source={backgroundSRC} resizeMode="cover" style={styles.image} />
      {checked ? <Image style={styles.picked} source={checkMarkSRC} /> : null}
    </TouchableOpacity>
  </View>
);

export default Item;

import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Cell from "./Cell";
import styles from "./styles";

const Item = ({ title, backgroundSRC, titleColor, whiteCell, blackCell, borderCell, pickedTheme, setPickedTheme }) => (
  <TouchableOpacity onPress={() => setPickedTheme(title)} activeOpacity={0.65} style={styles.item}>
    <Image style={styles.background} source={backgroundSRC} resizeMode="cover" />
    <View style={styles.exampleTheme}>
      <Cell cellColor={whiteCell} borderCell={borderCell} />
      <Cell cellColor={blackCell} borderCell={borderCell} />
      <Cell cellColor={blackCell} borderCell={borderCell} />
      <Cell cellColor={whiteCell} borderCell={borderCell} />
    </View>
    <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
    {pickedTheme === title ? <Image style={styles.checkMark} source={require("../../../../img/icons/correct.png")} /> : null}
  </TouchableOpacity>
);

export default Item;

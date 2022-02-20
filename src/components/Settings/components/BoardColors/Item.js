import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Item = ({ title, backgroundSRC, titleColor, whiteCell, blackCell, borderCell, pickedTheme, setPickedTheme }) => (
  <TouchableOpacity onPress={() => setPickedTheme(title)} activeOpacity={0.65} style={styles.item}>
    <Image style={styles.background} source={backgroundSRC} resizeMode="cover" />
    <View style={styles.exampleTheme}>
      <View
        style={[
          styles.cell,
          { backgroundColor: whiteCell },
          borderCell ? { borderWidth: StyleSheet.hairlineWidth, borderColor: borderCell } : null,
        ]}
      />
      <View
        style={[
          styles.cell,
          { backgroundColor: blackCell },
          borderCell ? { borderWidth: StyleSheet.hairlineWidth, borderColor: borderCell } : null,
        ]}
      />
      <View
        style={[
          styles.cell,
          { backgroundColor: blackCell },
          borderCell ? { borderWidth: StyleSheet.hairlineWidth, borderColor: borderCell } : null,
        ]}
      />
      <View
        style={[
          styles.cell,
          { backgroundColor: whiteCell },
          borderCell ? { borderWidth: StyleSheet.hairlineWidth, borderColor: borderCell } : null,
        ]}
      />
    </View>
    <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
    {pickedTheme === title ? <Image style={styles.checkMark} source={require("../../../../img/icons/correct.png")} /> : null}
  </TouchableOpacity>
);

export default Item;

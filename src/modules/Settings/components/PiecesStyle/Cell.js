import { View, StyleSheet, Image } from "react-native";
import styles from "./styles";

const Cell = ({ cellColor, borderCell, piece }) => {
  return (
    <View
      style={[
        styles.cell,
        { backgroundColor: cellColor },
        borderCell ? { borderWidth: StyleSheet.hairlineWidth, borderColor: borderCell } : null,
      ]}
    >
      <Image source={piece} style={styles.piece} />
    </View>
  );
};

export default Cell;

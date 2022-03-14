import { View, StyleSheet } from "react-native";
import styles from "./styles";

const Cell = ({ cellColor, borderCell }) => {
  return (
    <View
      style={[
        styles.cell,
        { backgroundColor: cellColor },
        borderCell ? { borderWidth: StyleSheet.hairlineWidth, borderColor: borderCell } : null,
      ]}
    />
  );
};

export default Cell;

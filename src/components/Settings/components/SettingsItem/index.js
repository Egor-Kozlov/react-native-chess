import { Pressable, Text, StyleSheet, StatusBar } from "react-native";
import COMPONENTS_LIST from "../../../COMPONENTS_LIST";

const SettingsItem = ({ title, navigation, id }) => (
  <Pressable
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? "rgb(219, 219, 219)" : "white",
      },
      styles.item,
    ]}
    onPress={() => navigation.navigate(COMPONENTS_LIST[id])}
  >
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);

export default SettingsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    opacity: 0.9,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#dbdbdb",
  },
  title: {
    fontSize: 13,
  },
});

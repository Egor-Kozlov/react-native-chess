import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    borderWidth: StyleSheet.hairlineWidth,
    width: "100%",
    flexWrap: "wrap-reverse",
    flexDirection: "row",
  },
});

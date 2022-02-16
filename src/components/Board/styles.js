import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    borderWidth: 1,
    width: "100%",
    display: "flex",
    flexWrap: "wrap-reverse",
    flexDirection: "row",
  },
});

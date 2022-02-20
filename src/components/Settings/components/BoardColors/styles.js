import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: 120,
    borderColor: "#adadad",
  },
  title: {
    position: "absolute",
    left: 12,
    top: 12,
    fontSize: 15,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  exampleTheme: {
    position: "absolute",
    top: 17,
    right: 10,
    width: 85,
    height: 85,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  cell: {
    width: "50%",
    height: "50%",
  },
});

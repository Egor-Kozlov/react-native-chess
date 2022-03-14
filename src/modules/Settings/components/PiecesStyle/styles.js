import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    width: "100%",
    height: 160,
    padding: 8,
    marginVertical: 7,
    alignItems: "center",
    // backgroundColor: "green",
  },
  item: {
    padding: 12,
    borderRadius: 15,
    width: 282,
    height: "79%",
    backgroundColor: "#dedede",
  },
  picked: {
    position: "absolute",
    bottom: 10,
    left: 130,
    width: 28,
    height: 28,
  },
  cellsContainer: {
    flexWrap: "wrap",
    width: "100%",
    height: 86,
    backgroundColor: "blue",
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    width: 43,
    height: 43,
    borderWidth: StyleSheet.hairlineWidth,
  },
  piece: {
    width: "77%",
    height: "77%",
    resizeMode: "contain",
  },
});

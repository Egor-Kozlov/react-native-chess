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
    height: 300,
    paddingVertical: 7,
    marginVertical: 6,
    alignItems: "center",
  },
  item: {
    padding: 10,
    borderRadius: 15,
    width: 175,
    height: "100%",
    backgroundColor: "#dedede",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  picked: {
    position: "absolute",
    bottom: 33,
    left: 67,
    width: 36,
    height: 36,
  },
});

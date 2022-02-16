import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  buttonsContainer: {
    paddingHorizontal: 15,
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 5,
  },
  settingsContainer: {
    position: "absolute",
    right: "4%",
    top: "3%",
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
});

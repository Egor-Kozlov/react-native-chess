import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  background: {
    flex: 1,
    // justifyContent: "center",
    width: "100%",
  },
  mainLogo: {
    width: 170,
    height: 170,
    marginBottom: 50,
  },
  buttonsContainer: {
    marginTop: "20%",
    paddingHorizontal: 15,
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
    top: "5%",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
});

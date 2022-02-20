import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalView: {
    margin: 15,
    top: "130%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    paddingBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 140,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    alignSelf: "center",
    marginTop: "5%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  remove: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 2,
    top: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  removeImg: {
    width: "70%",
    height: "70%",
  },
});

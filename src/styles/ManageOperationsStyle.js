import { StyleSheet } from "react-native";
import { COLOR } from "../../config";

export default StyleSheet.create({
  methodContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 2
  },
  header: {
    width: "100%",
    marginBottom: 15,
    color: COLOR.GOLD,
    fontVariant: "italic",
    fontWeight: "bold",
    fontSize: "1.5em",
    textAlign: "center"
  },
  stockInput: {
    width: "40%",
    height: 40,
    backgroundColor: COLOR.PAPER,
    color: COLOR.CHARCOAL,
    fontWeight: "bold",
    textAlign: "center"
  },
  methodSelect: {
    width: "50%",
    height: 40,
    color: COLOR.CHARCOAL,
  },
  productSelect: {
    width: "100%",
    height: 40,
    marginBottom: 20,
    color: COLOR.CHARCOAL,
    zIndex: 3
  },
  button: {
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 1
  }
});

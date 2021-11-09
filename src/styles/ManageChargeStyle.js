import { StyleSheet } from "react-native";
import { COLOR } from "../../config";

export default StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: "space-between",
    backgroundColor: COLOR.PAPER,
    borderRadius: 5
  },
  productStock: {
    width: "25%",
    paddingVertical: 5,
    backgroundColor: COLOR.SILK,
    borderRadius: 5,
    fontWeight: "bold",
    textAlign: "center"
  },
  productText: {
    width: "75%",
    fontWeight: "bold",
    textTransform: "uppercase"
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
  allSwitchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginBottom: 20,
  },
  allSwitchText: {
    fontSize: "1.1em",
    fontWeight: "bold",
    color: COLOR.GOLD,
  },
  button: {
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 1
  }
});

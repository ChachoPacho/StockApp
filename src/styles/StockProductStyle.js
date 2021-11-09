import { StyleSheet } from "react-native";
import { COLOR } from "../../config";

export default StyleSheet.create({
  container: {
    paddingVertical: 9,
    paddingHorizontal: 24,
    backgroundColor: COLOR.CHARCOAL,
    borderTopWidth: 7,
    borderTopColor: COLOR.GOLD
  },
  productNameContainer: {
    width: "73%",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLOR.PAPER
  },
  productName: {
    width: "100%",
    minHeight: "2.7em",
    overflow: "hidden",
    paddingTop: 6,
    paddingLeft: 4,
    fontWeight: "bold",
    fontSize: "1em",
    letterSpacing: 0,
    textAlign: "left",
    color: COLOR.CHARCOAL
  },
  productSpecsContainer: {
    display: "flex",
    width: "100%",
    marginTop: 10,
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  productPriceContainer: {
    display: "flex",
    width: "22%",
    flexWrap: "nowrap",
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: COLOR.PAPER
  },
  productPrice: {
    display: "inline-block",
    width: "100%",
    minHeight: "2.7em",
    fontSize: "1em",
    fontWeight: "bold",
    textAlign: "center",
    color: COLOR.CHARCOAL,
  },
  stockText: {
    color: COLOR.SILK,
    marginTop: 5,
    fontSize: "1.5em"
  },
  totalText: {
    color: COLOR.GOLD,
    marginTop: 5,
    fontSize: "1.5em"
  },
  cashSymbol: {
    paddingTop: 6,
    paddingLeft: 4,
    color: COLOR.GOLD,
    fontSize: "2em"
  }
});
import { View, TouchableOpacity, Image } from "react-native";
import Cell from "./Cell";
import styles from "./styles";

const checkMarkSRC = require("../../../../../assets/img/icons/correct.png");

const Item = ({ whiteColor, blackColor, kw, qw, rw, bw, nw, pw, kb, qb, rb, bb, nb, pb, setPieces, id, checked }) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.item, checked ? { backgroundColor: "#cff0c9", height: "100%" } : "null"]}
      onPress={() => setPieces(id)}
    >
      <View style={styles.cellsContainer}>
        <Cell cellColor={whiteColor} piece={pw} />
        <Cell cellColor={blackColor} piece={pb} />
        <Cell cellColor={blackColor} piece={nw} />
        <Cell cellColor={whiteColor} piece={nb} />
        <Cell cellColor={whiteColor} piece={bw} />
        <Cell cellColor={blackColor} piece={bb} />
        <Cell cellColor={blackColor} piece={rw} />
        <Cell cellColor={whiteColor} piece={rb} />
        <Cell cellColor={whiteColor} piece={qw} />
        <Cell cellColor={blackColor} piece={qb} />
        <Cell cellColor={blackColor} piece={kw} />
        <Cell cellColor={whiteColor} piece={kb} />
      </View>
      {checked ? <Image style={styles.picked} source={checkMarkSRC} /> : null}
    </TouchableOpacity>
  </View>
);

export default Item;

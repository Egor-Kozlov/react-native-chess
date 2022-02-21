import { Image } from "react-native";
import React from "react";

const kw = require("../../img/pieces/default/kw.png");
const qw = require("../../img/pieces/default/qw.png");
const rw = require("../../img/pieces/default//rw.png");
const bw = require("../../img/pieces/default//bw.png");
const nw = require("../../img/pieces/default/nw.png");
const pw = require("../../img/pieces/default/pw.png");

const kb = require("../../img/pieces/default/kb.png");
const qb = require("../../img/pieces/default/qb.png");
const rb = require("../../img/pieces/default/rb.png");
const bb = require("../../img/pieces/default/bb.png");
const nb = require("../../img/pieces/default/nb.png");
const pb = require("../../img/pieces/default/pb.png");

const Piece = ({ piece }) => {
  let image = null;
  if (piece.type === "k" && piece.color === "w") image = kw;
  if (piece.type === "q" && piece.color === "w") image = qw;
  if (piece.type === "r" && piece.color === "w") image = rw;
  if (piece.type === "b" && piece.color === "w") image = bw;
  if (piece.type === "n" && piece.color === "w") image = nw;
  if (piece.type === "p" && piece.color === "w") image = pw;
  if (piece.type === "k" && piece.color === "b") image = kb;
  if (piece.type === "q" && piece.color === "b") image = qb;
  if (piece.type === "r" && piece.color === "b") image = rb;
  if (piece.type === "b" && piece.color === "b") image = bb;
  if (piece.type === "n" && piece.color === "b") image = nb;
  if (piece.type === "p" && piece.color === "b") image = pb;

  return (
    <Image
      source={image}
      style={{ width: "77%", height: "77%", resizeMode: "contain" }}
    />
  );
};

export default React.memo(Piece);

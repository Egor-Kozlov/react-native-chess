import { Image } from "react-native";
import React from "react";

const Piece = ({ piece, piecesStyle }) => {
  let image = null;

  if (piece.type === "k" && piece.color === "w") image = piecesStyle.kw;
  if (piece.type === "q" && piece.color === "w") image = piecesStyle.qw;
  if (piece.type === "r" && piece.color === "w") image = piecesStyle.rw;
  if (piece.type === "b" && piece.color === "w") image = piecesStyle.bw;
  if (piece.type === "n" && piece.color === "w") image = piecesStyle.nw;
  if (piece.type === "p" && piece.color === "w") image = piecesStyle.pw;
  if (piece.type === "k" && piece.color === "b") image = piecesStyle.kb;
  if (piece.type === "q" && piece.color === "b") image = piecesStyle.qb;
  if (piece.type === "r" && piece.color === "b") image = piecesStyle.rb;
  if (piece.type === "b" && piece.color === "b") image = piecesStyle.bb;
  if (piece.type === "n" && piece.color === "b") image = piecesStyle.nb;
  if (piece.type === "p" && piece.color === "b") image = piecesStyle.pb;

  return <Image source={image} style={{ width: "77%", height: "77%", resizeMode: "contain" }} />;
};

export default React.memo(Piece);

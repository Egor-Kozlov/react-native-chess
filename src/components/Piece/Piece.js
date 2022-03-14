import { Image } from "react-native";
import React from "react";

const pickPieceImg = (piece, piecesStyle) => {
  if (piece.type === "k" && piece.color === "w") return piecesStyle.kw;
  else if (piece.type === "q" && piece.color === "w") return piecesStyle.qw;
  else if (piece.type === "r" && piece.color === "w") return piecesStyle.rw;
  else if (piece.type === "b" && piece.color === "w") return piecesStyle.bw;
  else if (piece.type === "n" && piece.color === "w") return piecesStyle.nw;
  else if (piece.type === "p" && piece.color === "w") return piecesStyle.pw;
  else if (piece.type === "k" && piece.color === "b") return piecesStyle.kb;
  else if (piece.type === "q" && piece.color === "b") return piecesStyle.qb;
  else if (piece.type === "r" && piece.color === "b") return piecesStyle.rb;
  else if (piece.type === "b" && piece.color === "b") return piecesStyle.bb;
  else if (piece.type === "n" && piece.color === "b") return piecesStyle.nb;
  else if (piece.type === "p" && piece.color === "b") return piecesStyle.pb;
};

const Piece = ({ piece, piecesStyle }) => {
  return <Image source={pickPieceImg(piece, piecesStyle)} style={{ width: "77%", height: "77%", resizeMode: "contain" }} />;
};

export default React.memo(Piece);

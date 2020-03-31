let piece = "";
let pieceLower = piece.toLowerCase();

switch (pieceLower) {
  case "pawn":
    console.log("One square in any direction")
    break;
  case "rook":
    console.log("Any squares on horizontal or vertical")
    break;
  case "knight":
    console.log("L move")
    break;
  case "bishop":
    console.log("Diagonals")
    break;
  case "queen":
    console.log("Any squares in any direction")
    break;
  case "king":
    console.log("One square in any direction")
    break;
  default:
    console.log("Please insert a chess piece!")
    break;
}
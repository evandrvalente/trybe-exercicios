let chesspiece = "PAWN";
let result = chesspiece.toLowerCase();

switch (result) {
    case "queen":
        console.log ("Queen -> move in any straight-line direction, can move any number of squares.");
        break
    case "king":
        console.log ("King -> can move one square in any direction.");
        break
    case "rook":
        console.log ("Rook -> move vertically or horizontally through any unoccupied square.");
        break
    case "bishop":
        console.log ("Bishop -> move diagonally or horizontally through any unoccupied square.");
        break
    case "knight":
        console.log ("Knight -> moves in an 'L'-shaped pattern (two squares in one direction and then one square in a different direction.");
        break
    case "pawn":
        console.log ("Pawn -> moves only forward unless it is capturing an enemy piece, which it does by moving diagonally one square to the left or right.");
        break
   default:
   console.log ("This is not a chesspiece");
}
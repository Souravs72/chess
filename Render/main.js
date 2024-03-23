import { blackBishop, blackKing, blackKnight, blackPawn,  blackQueen,  blackRook,  whiteBishop, whiteKing, whiteKnight, whitePawn, whiteQueen, whiteRook } from "../Data/pieces.js";
import { } from "../Data/pieces.js";
import { } from "../Data/pieces.js";

const ROOT_DIV = document.getElementById("root");



//use when we want to render pieces on board
function pieceRender(data) {

    data.forEach((row) => {
        row.forEach((square) => {
            
            if(square.piece) {
                // console.log(square)
                const squareDiv = document.getElementById(square.id);

                const pieceImage = document.createElement("img");
                // console.log(square.piece.img);
                pieceImage.src = square.piece.img;
                pieceImage.classList.add("pieceImage");
                squareDiv.appendChild(pieceImage);
            }
        });
    });
}

//called when the game starts and the board is rendered first time (only once)
function initGameRender(data) {
    data.forEach((element) => {
        const rowElement = document.createElement("div");
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add(square.color, "square");
            
            //render black pawns
            if(square.id[1] == 7) {
                square.piece = blackPawn(square.id);
            }
            //render black bishops
            if(square.id[1] == 8) {
                if (square.id[0] == 'a' || square.id[0]=='h') {
                    square.piece = blackRook(square.id);
                }

                if (square.id[0] == 'b' || square.id[0]=='g') {
                    square.piece = blackKnight(square.id);
                }
                if (square.id[0] == 'f' || square.id[0]=='c') {
                    square.piece = blackBishop(square.id);
                }
                if (square.id[0] == 'd') {
                    square.piece = blackKing(square.id);
                }
                if (square.id[0] == 'e') {
                    square.piece = blackQueen(square.id);
                }
            }

            //render white pawns
            if(square.id[1] == 2) {
                square.piece = whitePawn(square.id);
            }
            //render black bishops
            if(square.id[1] == 1) { 
                if (square.id[0] == 'a' || square.id[0]=='h') {
                    square.piece = whiteRook(square.id);
                }

                if (square.id[0] == 'b' || square.id[0]=='g') {
                    square.piece = whiteKnight(square.id);
                }
                if (square.id[0] == 'f' || square.id[0]=='c') {
                    square.piece = whiteBishop(square.id);
                }
                if (square.id[0] == 'd') {
                    square.piece = whiteKing(square.id);
                }
                if (square.id[0] == 'e') {
                    square.piece = whiteQueen(square.id);
                }

            }


            rowElement.appendChild(squareDiv);
        });
        rowElement.classList.add("squareRow");
        ROOT_DIV.appendChild(rowElement);
    });
    pieceRender(data);
}



export {initGameRender};
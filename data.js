function Greet() {
    alert("Welcome to play Chess");
}
//for each square
function Square(color, id, piece) {
    return { color, id, piece };
}

function SquareRow(rowId) {
    const squareRow = [];
    const squareCol = ["a", "b", "c", "d", "e", "f", "g", "h"];

    if (rowId % 2 == 0) {
        let initColor = "White";

        squareCol.forEach((element, index) => {
            if (index % 2 == 0) {
                squareRow.push(Square("black", element + rowId, null));
            } else {
                squareRow.push(Square("white", element + rowId, null));
            }
        });
    } else {
        squareCol.forEach((element, index) => {
            if (index % 2 == 0) {
                squareRow.push(Square("white", element + rowId, null));
            } else {
                squareRow.push(Square("black", element + rowId, null));
            }
        });
    }

    return squareRow;
}

function initGame() {
    const rowArray = [];
    for (let i = 8; i >= 1; i--) {
        rowArray.push(SquareRow(i));
    }
    return rowArray;
}

export { initGame };

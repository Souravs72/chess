const ROOT_DIV = document.getElementById("root");

function initGameRender(data) {
    data.forEach((element) => {
        const rowElement = document.createElement("div");
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color, "square");
            rowElement.appendChild(squareDiv);
        });
        rowElement.classList.add("squareRow");
        ROOT_DIV.appendChild(rowElement);
    });
}
export {initGameRender};
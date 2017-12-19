function showBoard(board, camera) {
    var dboard = window.document.getElementById("board");
    while (dboard.firstChild) {
        dboard.removeChild(dboard.firstChild);
    }
    console.log(board);
    for (var y = 0; y < camera.h; ++y) {
        var tr = document.createElement("tr");
        for (var x = 0; x < camera.w; ++x) {
            var td = document.createElement("td");
            setImage(board, y + camera.y, x + camera.x, td);
            tr.appendChild(td);
        }
        dboard.appendChild(tr);
    }
}

function setImage(board, y, x, td) {
    if (board[y][x] == " ") {
        td.style.backgroundColor = "white";
    } else if (board[y][x].type == "wall") {
        td.style.backgroundImage = "url(img/objects/Wall.png)";
        td.style.backgroundPosition = "-" + board[y][x].x + "px "
                        + "-" + board[y][x].y + "px ";
    } else if (board[y][x].type == "floor") {
        td.style.backgroundImage = "url(img/objects/Floor.png)";
        td.style.backgroundPosition = "-" + board[y][x].x + "px "
                        + "-" + board[y][x].y + "px ";
    } else {
        td.style.backgroundColor = "red";
    }
    td.onclick = function() {
        console.log(board[y][x].c);
    }
}

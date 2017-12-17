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
            if (board[y + camera.y][x + camera.x] == " ") {
                td.style.backgroundColor = "white";
            } else {
                td.style.backgroundColor = "black";
            }
            tr.appendChild(td);
        }
        dboard.appendChild(tr);
    }
}

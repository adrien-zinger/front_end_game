/**
 * 
 */


/**
 * 
 */
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
            td.id = x + "-" + y;
            td.addEventListener("mouseover", event => onMouseOver(event.target), false);
            tr.appendChild(td);
        }
        dboard.appendChild(tr);
    }
}

/**
 * 
 */
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

/**
 * 
 */
function onOrderChange(_order) {
    console.log(_order);
    if (_order.current != order.current) {
        var id = _order.characters[_order.current].player;
        game.get("players").get(id).val(player => {
            var pos = JSON.parse(player.pos);
            var cell = document.getElementById(pos.x + "-" + y);
            if (cell === undefined) return;
            d = document.createElement("div");
            d.id = id + "-current";
            d.style.width = "16px";
            d.style.height = "16px";
            d.style.zIndex = 0;
            d.style.backgroundColor = "#8bc34a85";
            d.style.position = "absolute";
            var tmp = document.getElementById(d.id);
            if (tmp) {
                tmp.parentNode.removeChild(tmp);
            }
            cell.appendChild(d);
        });
    }
    order = _order;
}
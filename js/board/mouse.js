var mouseOnCell = null;

function onMouseOver(el) {
    console.log("mouse - -- --- ----- -------- ----- --- -- -");
    var cell = el;
    while (cell.parentNode.parentNode.id != "board") {
        cell = cell.parentNode;
    }
    console.log("on mouse over id", cell.id);
    if (mouseOnCell != null && mouseOnCell == cell.id) {
        return;
    }
    mouseOnCell = cell.id;
    beforeMouseOver();
    for (var child=cell.firstChild; child!==null; child=child.nextSibling) {
        if (child.className == "player") {
            return onMouseOverPlayer(child.id);
        } else if (child.className == "object") {
            return onMouseOverObject(child.id);
        }
    }
    var tmp = cell.id.split("-");
    var pos = {x: parseInt(tmp[0]), y: parseInt(tmp[1])};

    if (board[pos.y][pos.x].type == "floor") {
        return onMouseOverTheFloor(pos);
    }
}

function updateCurrentPlayerImage() {
    if (playerInInfo != null && 
        playerInInfo.userId == localStorage['dungeon-userId']) {
            console.log("update image todo");
    }
}

function onMouseOverPlayer(playerId) {
    console.log("on mouse over player");
}

function onMouseOverObject(objectId) {
    console.log("on mouse over object");
}

function onMouseOverTheFloor(position) {
    console.log("on mouse over the floor");
    var current = order.characters[order.current];
    if (localStorage['dungeon-userId'] == current.userId) {
        var currentPlayer = players[current.playerId];
        var path = astar(currentPlayer.x, currentPlayer.y,
            position.x, position.y);
        if (path.length != 0 && path.length <= currentPlayer.move) {
            printPath(path);
        }
    }
}

function printPath(path) {
    console.log("print path")
    for (var i = 0; i < path.length; ++i) {
        console.log(":" + path[i].x + "-" + path[i].y);
        var d = document.createElement("div");
        d.className = "path";
        d.style.width = "16px";
        d.style.height = "16px";
        d.style.zIndex = 0;
        d.style.backgroundColor = "red";
        d.style.position = "absolute";
        document.getElementById(path[i].x + "-" + path[i].y).appendChild(d);
    }
}

function beforeMouseOver() {
    // remove previous path
    console.log("clean mouse over");
    var els = document.getElementsByClassName('path');
    Array.from(els).forEach(function(el) {
        console.log(":" + el.parentNode.id);
        el.parentNode.removeChild(el);
    });
}
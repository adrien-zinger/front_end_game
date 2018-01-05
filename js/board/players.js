function onPlayerChange(id, player) {
    if (players[id] === undefined) {
        players[id] = player;
        showPlayer(id, {x: player.x, y: player.y});
    }
    if (players[id].x != player.x || players[id].y != player.y) {
        showPlayer(id, {x: player.x, y: player.y});
    }
    players[id] = player;
}

function showPlayer(id, pos) {
    var player = players[id];
    var cell = document.getElementById(pos.x + "-"
                                    + pos.y);
    if (cell) {
        var p = document.createElement("div");
        p.id = id;
        p.style.width = "16px";
        p.style.height = "16px";
        p.style.backgroundImage =
            "url(img/Characters/chars.png)";
        p.style.position = "absolute";
        p.style.backgroundPositionX = "0px";
        p.style.backgroundPositionY = -(16 * 2) + "px";
        p.style.zIndex = 1;
        var tmp = document.getElementById(id);
        if (tmp) {
            tmp.parentNode.removeChild(tmp)
        }
        cell.appendChild(p);
    }
}

function reDrawPlayers() {
    if (players) {
        for (id in players) {
            showPlayer(id, {x: players[id].x, y: players[id].y});
        }
    }
}
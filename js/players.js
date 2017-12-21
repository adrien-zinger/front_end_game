function showPlayer(id, pos) {
    console.log("showPlayer");
    if (players[id] === undefined) {
        players[id] = {pos: pos};
    }
    var player = players[id];
    if (pos.y != player.pos.y ||
        pos.x != player.pos.x ||
        document.getElementById(id) === undefined) {
        var cell = document.getElementById(player.pos.x + "-"
                                        + player.pos.y);
        if (cell) {
            var p = document.createElement("div");
            p.id = id;
            p.style.width = "16px";
            p.style.height = "16px";
            p.style.backgroundImage =
                "url(img/Commissions/Engineer.png";
            p.style.position = "absolute";
            p.style.zIndex = 1;
            var tmp = document.getElementById(id);
            if (tmp) {
                tmp.parentNode.removeChild(tmp)
            }
            console.log("appendChild player");
            cell.appendChild(p);
        }
    }
    players[id].pos = pos;
}

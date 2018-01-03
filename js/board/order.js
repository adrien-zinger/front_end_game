var order = {current: -1};

function pass() {
    var tmp = {};
    if (order.characters.length - 1 == order.current) {
        tmp.current = 0;
    } else {
        tmp.current = order.current + 1;
    }
    tmp.characters = order.characters;
    console.log(tmp);
    game.get("order").put(JSON.stringify(tmp));
}

/**
 * 
 */
function onOrderChange(_order) {
    console.log("on order change");
    console.log(_order);
    if (_order.current != order.current) {
        console.log("set order");
        var id = _order.characters[_order.current].playerId;
        console.log(_order.current);
        console.log(_order.characters);
        console.log(id);
        if (order.current != -1) {
            var rm = document.getElementById(order.characters[order.current].playerId + "-current");    
            if (rm) {
                rm.parentNode.removeChild(rm);
            }
        }
        game.get("players").get(id).val(player => {
            var pos = {x: player.x, y: player.y};
            var cell = document.getElementById(pos.x + "-" + pos.y);
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
            setPlayerInfo(player);
        });
    }
    order = _order;
}

function reDrawOrder() {
    if (order.current != -1) {
        var player = players[order.characters[order.current].playerId];
        var pos = {x: player.x, y: player.y};
        var cell = document.getElementById(pos.x + "-" + pos.y);
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
    }
}

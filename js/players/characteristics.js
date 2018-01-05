function getCharacteristics(playerNode, list) {

    function calc(player, classe, equipment, name) {
        var ret = 0
        if (player && player[name]) {
            ret += parseInt(player[name]);
        }
        if (equipment && equipment[name]) {
            var act = equipment[name][0];
            var num = parseInt(equipment[name].slice(1, equipment[name].length));
            if (act == "=") {
                return num;
            } else if (act == "+") {
                ret += num;
            } else if (act == "-") {
                ret -= num;
            }
        }
        if (classe && classe[name]) {
            var act = classe[name][0];
            var num = parseInt(classe[name].slice(1, classe[name].length));
            if (act == "=") {
                return num;
            } else if (act == "+") {
                ret += num;
            } else if (act == "-") {
                ret -= num;
            }
        }
        return ret;
    }

    console.log("enter get chars");
    return new Promise(resolve => {
        var ret = [];
        playerNode.val(player => {
            console.log("find player val");
            playerNode.get("classe").val(classe => {
                console.log("find classe val");
                playerNode.get("kit").val(equipment => {
                    console.log("find equipment val");
                    console.log("feed chars ret");
                    for (var i = 0; i < list.length; ++i) {
                        ret[list[i]] = calc(player, classe,
                            equipment, list[i]);
                    }
                    resolve(ret);
                });
            });
        });
    });
}

function setCharacteristics(playerNode, map) {
    playerNode.val(player => {
        console.log("set player chars");
        console.log(player);
        console.log(map);
        for (name in map) {
            var act = map[name][0];
            var num = map[name].slice(1, map[name].length);
            if (act == "=") {
                player[name] = parseInt(num);
            } else if (act == "+") {
                player[name] = parseInt(num) + parseInt(player[name]);
            } else if (act == "-") {
                player[name] -= parseInt(num) + parseInt(player[name]);
            }
        }
        playerNode.put(player);
    });
}

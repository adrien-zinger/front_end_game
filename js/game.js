function getPlayers() {
    return new Promise(resolve => {
        user.get("players").val(psVal => {
            if (psVal === undefined) {
                user.set({players: null}, () => {
                    resolve(user.get("players"))
                });
            } else {
                resolve(user.get("players"))
            }
        });
    });
}

function getPlayer(playerName) {
    return new Promise(resolve => {
        getPlayers().then(ps => {
            ps.get(playerName).val(pVal => {
                if (pVal === undefined) {
                    ps.put(getNewPlayer(playerName), () => {
                        resolve(ps.get(playerName));
                    });
                } else {
                    resolve(ps.get(playerName));
                }
            })
        })
    });
}

function initPlayer(playerName) {
    return new Promise(resolve => {
        getPlayer(playerName).then(player => {
            player.put({equipment: null}, () => {
                player.get("equipment").set({
                    name: "hand",
                    action: 1,
                    type: "strentgh"
                }, () => {
                    player.put({starving: 30}, () => {
                        resolve(player)
                    });
                });
            });
        });
    });
}

function getNewPlayer(playerName) {
    var ret = {};
    ret[playerName] = {
        name: playerName,
        strentgh: 0,
        agility: 1,
        life: 10,
        move: 3,
        action: 3,
        gold: 0
    }
    return ret;
}
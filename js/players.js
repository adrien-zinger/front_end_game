function initPlayer(playerName) {
    return new Promise(resolve => {
        user.val(userVal => {
            user.get("players").val(playersVal => {
                if (playersVal === undefined || playersVal == null) {
                    playersVal = {};
                }
                if (playersVal[playerName]) {
                    return resolve(playersVal[playerName]);
                }
                playersVal[playerName] = getNewPlayer(playerName);
                user.get("players").put(playersVal);
                resolve(playersVal[playerName]);
            });
            if (!userVal.players) {
                user.put(userVal);
            }
        });
    });
}

function removeAllPlayers(user) {
    user.val(u => {
        u.players = null;
        user.put(u);
    });
}

function getNewPlayer(playerName) {
    return {
        name: playerName,
        move: 4,
        moveRound: 4,
        action: 10,
        actionRound: 3,
        strength: 0,
        dexterity: 0,
        constitution: 10,
        constitutionRound: 1,
        intelligence: 0,
        detection: 0,
        lockPicking: 0,
        defusing: 0,
        discretion: 0,
        acrobatics: 0,
        artOfMagic: 0,
        hearing: 0,
        view: 0,
        precision: 0,
        knifes: 0,
        launch: 0,
        axe: 0,
        blunt: 0,
        swords: 0,
        toHandSwords: 0,
        heavyArmor: 0,
        lightArmor: 0,
        alteration: 0,
        destruction: 0,
        enchant: 0,
        illusion: 0,
        equipment: {},
        effectsRound: {},
        effect: {},
        weapons: {},
        bag: {},
        x: 0,
        y: 0,
        toX: 0,
        toY: 0,
        imageX: 0,
        imageY: 0,
        gold: 0
    }
}
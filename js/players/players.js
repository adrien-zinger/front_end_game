function initPlayer(playerName) {
    return new Promise(resolve => {
        user.val(userVal => {
            console.log('enter into user to create player');
            if (userVal.players === undefined) {
                console.log('players === undefined');
                var playersVal = {};
                console.log('create new player');
                playersVal[playerName] = getNewPlayer(playerName);
                user.get("players").put(playersVal);
                resolve(playersVal[playerName]);
            } else {
                console.log('players !== undefined');
                user.get("players").val(playersVal => {
                    if (playersVal[playerName]) {
                        console.log('player already exist');
                        return resolve(playersVal[playerName]);
                    }
                    console.log('create new player');
                    playersVal[playerName] = getNewPlayer(playerName);
                    user.get("players").put(playersVal);
                    resolve(playersVal[playerName]);
                });
            }
            user.put(userVal);
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
        artOfMagic: 0,
        hearing: 0,
        view: 0,
        archery: 0,
        knifes: 0,
        launch: 0,
        axe: 0,
        blunt: 0,
        swords: 0,
        heavyArmor: 0,
        lightArmor: 0,
        alteration: 0,
        destruction: 0,
        enchant: 0,
        illusion: 0,
        equipment: null,
        effectsRound: null,
        effect: null,
        weapons: null,
        bag: null,
        classe: null,
        x: 0,
        y: 0,
        toX: 0,
        toY: 0,
        imageX: 0,
        imageY: 0,
        visibility: 1,
        gold: 0
    }
}
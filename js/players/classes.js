function changeClasse(player) {
    player.val(playerVal => {
        player.get("classe").val(classe => {
            if (classe) {
                var i;
                for (i = 0; i < allClasses.length; ++i) {
                    if (allClasses[i].name == classe.name) {
                        break;
                    }
                }
                if (i + 1 >= allClasses.length) {
                    player.get("classe").put(allClasses[0]);
                } else {
                    player.get("classe").put(allClasses[i + 1]);
                }
            } else {
                player.get("classe").put(allClasses[0]);
            }
        });
    });
}

var allClasses = [
    {
        name: "Vieil homme",
        strength: "+4",
        dexterity: "+5",
        constitution: "+5",
        constitutionRound: "-1",
        intelligence: "+3",
        detection: "+3",
        imageY: 0,
        imageX: 0
    },
    {
        name: "L'homme barbe",
        strength: "+7",
        constitution: "+5",
        constitutionRound: "+2",
        axe: "+4",
        blunt: "+3",
        imageY: 16 + 1,
        imageX: 0
    },
    {
        name: "Tony le borgne",
        intelligence: "+3",
        detection: "+3",
        lockPicking: "+3",
        defusing: "+3",
        discretion: "+3",
        view: "-1",
        imageY: 16 * 2 + 2,
        imageX: 0
    },
    {
        name: "Black santa",
        lockPicking: "+1",
        discretion: "+4",
        illusion: "+3",
        alteration: "+2",
        imageY: 16 * 3 + 3,
        imageX: 0
    },
    {
        name: "Legolas",
        lockPicking: "-1",
        discretion: "+7",
        illusion: "-3",
        alteration: "-2",
        imageY: 16 * 4 + 4,
        imageX: 0
    },
    {
        name: "Nain rouge",
        lockPicking: "-1",
        discretion: "-7",
        illusion: "-3",
        alteration: "-2",
        imageY: 16 * 5 + 5,
        imageX: 0
    }

]
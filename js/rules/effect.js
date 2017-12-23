function attack(weapon, target, launcher, targetId, launcherId) {

    function calculateMove(categories, launcher, ca) {
        var bonus = 0;
        for (var i = 0; categories.length; ++i) {
            if (launcher[categories[i]]) {
                bonus += launcher[categories[i]];
            }
        }
        var natural = Random.int(1, 20);
        if (natural == 1) {
            return false;
        }
        return natural + bonus >= ca;
    }
    
    function calculateCA(categories, target) {
        var ca = 10;
        for (var i = 0; categories.length; ++i) {
            if (target[categories[i]]) {
                ca += target[categories[i]];
            }
        }
        return ca;
    }    

    function secureParsing(str) {
        if (str == "" || str == null || str === undefined) return "[]";
        return str;
    }

    function addEffect(effect, targetId) {
        game.get("players").get(targetId).val(player => {
            if (effect.type == "now") {
                player.effectsNow = secureParsing(player.effectsNow);
                var effects = JSON.parse(player.effectsNow);
                effects.push(effect);
                player.effectsNow = JSON.stringify(effect);
            } else if (effect.type == "tour") {
                player.effectsTour = secureParsing(player.effectsTour);
                var effects = JSON.parse(player.effectsTour);
                effects.push(effect);
                player.effectsTour = JSON.stringify(effect);
            }
            game.get("players").get(targetId).put(player);
        });
    }

    function attack(effects, target) {
        for (var i = 0; i < effects.length; ++i) {
            var ca = calculateCA(effects[i].ca, target);
            var move = calculateMove(effects[i].bonus, launcher, ca);
            if (move) {
                applyEffect(effects[i], target);
            } else {
                applyEsquive(target);
            }
        }
    }

    attack(weapon.effects.target, target);
    attack(weapon.effects.launcher, launcher);
}
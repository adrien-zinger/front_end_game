/**
 * 
 * Fichier a inclure dans toute les pages.
 * 
 * il contient les fonctions principale d'initialisation ainsi
 * que la recherche de l'utilisateur courant
 */

/*
var absolutePath = function(href) {
    var link = document.createElement("a");
    link.href = href;
    return (link.protocol+"//"+link.host+link.pathname+link.search+link.hash);
}
*/

var gun;

/**
 * Retourne gun pointant vers la bdd a l'url en cache
 */
function initGun() {
    gun = Gun(localStorage['dungeon-gun-url']);
}

/**
 * Retourne le noeud de l'utilisateur courant
 */
function getUser() {
    return new Promise(resolve => {
        var userId = localStorage['dungeon-userId'];
        if (userId) {
            resolve(gun.get("users").get(userId));
        }
    });
}
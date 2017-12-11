/*
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}
*/
var absolutePath = function(href) {
    var link = document.createElement("a");
    link.href = href;
    return (link.protocol+"//"+link.host+link.pathname+link.search+link.hash);
}

var gun;

function initGun() {
    gun = Gun(localStorage['dungeon-gun-url']);
}

function getUserValue() {
    return new Promise(resolve => {
        var userId = localStorage['dungeon-userId'];
        if (userId) {
            gun.get("users").get(userId).val(function(user) {
                resolve(user);
            });
        }
    });
}

function getUser() {
    return new Promise(resolve => {
        var userId = localStorage['dungeon-userId'];
        if (userId) {
            resolve(gun.get("users").get(userId));
        }
    });
}
var playerInInfo;

function setPlayerInfo(player) {
    playerInInfo = player;
    document.getElementById("current-player").innerText = player.name;
    console.log("order player", player);
    console.log("order user", user);
}
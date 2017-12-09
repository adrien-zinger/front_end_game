var board = [];

function show_board() {
    var dboard = window.document.getElementById("board");
    for (var x = 0; x < 10; ++x) {
        board[x] = [];
        var tr = document.createElement("tr");
        for (var y = 0; y < 10; ++y) {
            var td = document.createElement("td");
            td.className = "classic_grass_middle";
            tr.appendChild(td);
        }
        dboard.appendChild(tr);
    }
}

var conf = {
    map_size: 40,
    rooms: 4,
    room_size_min: 5,
    room_size_max: 6
}

var getEmptyTable = function(conf) {
    var map = [];
    for (var i = 0; i < conf.size; ++i) {
        map[i] = [];
        for (var j = 0; j < conf.size; ++j) {
            map[i][j] = 0;
        }
    }
    return map;
}

var buildMap = function(conf, table) {
    getRandomIntInclusive(0, conf.size - 1);
}

var getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

/*
var strew = function (map, conf) {
    var floor = (rooms / (conf.map_size * conf.map_size)) * 100;
    var middle = floor * (room_size_max / 100);
    var room = conf.rooms;
    while (room >= 0) {
        for (var x = 0; x < map.length; ++x) {
            for (var y = 0; y < map.length; ++y) {
                if (Math.random() <= middle) {
                    map[x][y] = 1;
                    room--;
                }
            }
        }
    }
}

var feed = function(x, y, size) {

}
*/
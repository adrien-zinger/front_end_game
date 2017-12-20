var design = function(table, type) {
    var ret = [];
    var initPos = {x: 1, y: 1};
    if (type == "classic") {
        for (var y = 0; y < table.length; ++y) {
            ret[y] = [];
            for (var x = 0; x < table[y].length; ++x) {
                ret[y][x] = table[y][x];
                if (table[y][x] == "x") {
                    var code = getCode(table, y, x);
                    ret[y][x] = getBgWallPosition(code);
                    ret[y][x].y += 16 * 3;
                } else {
                    var code = getCode(table, y, x);
                    ret[y][x] = getBgFloorPosition(code);
                    ret[y][x].y += 16 * 3;
                }
            }
        }
    }
    return ret;
}



var getCode = function(table, y, x) {
    var test = function(y, x) {
        if (table[y] === undefined
            || table[y][x] === undefined
            || table[y][x] == "x") {
            return "x";
        } else {
            return " ";
        }
    }
    var ret = "";
    ret += test(y - 1, x - 1);
    ret += test(y - 1, x);
    ret += test(y - 1, x + 1);
    ret += test(y, x - 1);
    ret += test(y, x);
    ret += test(y, x + 1);
    ret += test(y + 1, x - 1);
    ret += test(y + 1, x);
    ret += test(y + 1, x + 1);
    return ret;
}
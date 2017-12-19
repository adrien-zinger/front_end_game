var getBgWallPosition = function(code) {
    switch(code) {
        case "   xx xxx":
        case "   xx xx ": return {type: "wall", x: 16 * 2, y: 0, c:code};
        case " xx xx  x":
        case "xx xxxxxx":
        case "  x xx   ":
        case "    xx   ":
        case "xxx xx   ":
        case " x  xx   ":
        case "    xx  x":
        case " xx xx   ": return {type: "wall", x: 0, y: 16 * 2, c:code};
        case "xxxxxx   ":
        case "x  xxx  x":
        case "xxxxxx  x":
        case "xx xxx   ":
        case " xxxxx   ":
        case "xxxxxx  x":
        case "   xxxxxx":
        case "x xxxx   ":
        case "xx xxxx  ":
        case "  xxxx  x":
        case "xx xxxx x":
        case "x xxxxxxx":
        case "   xxxx x":
        case "   xxx   ":
        case "   xxxx  ":
        case "x  xxx   ":
        case "   xxx  x":
        case "  xxxx   ":
        case "x  xxxxxx":
        case "  xxxxxxx":
        case "xxxxxxx  ": return {type: "wall", x: 16, y: 0, c:code};
        case " xx x    ":
        case "xx  x    ":
        case " x  x    ": return {type: "wall", x: 16, y: 16, c:code};
        case "xx xx    ":
        case "   xx    ":
        case "xxxxx    ":
        case " x xx    ":
        case "   xx x  ":
        case " xxxxxxxx":
        case "x  xx    ":
        case "xx xx x  ": return {type: "wall", x: 16 * 2, y: 16 * 2, c:code};
        case " x  x  x ":
        case " xx x  x ":
        case " x  x xxx":
        case " xx xx xx":
        case " xx xxxxx":
        case "xxx xx xx":
        case "xx xx xxx":
        case "xxx xx xx":
        case " x  x  xx":
        case "xx  x  x ":
        case "xxxxx xxx": return {type: "wall", x: 0, y: 16, c:code};
        case " x  xxxxx":
        case " x  xx xx":
        case " xx xx x ": return {type: "wall", x: 16 * 3, y: 16, c:code};
        case "    x  x ":
        case "x  xxxxx ":
        case "  xxxx xx":
        case "    x  xx":
        case "   xxxxx ":
        case "    x xx ":
        case "   xxx xx":
        case "x  xx    ": return {type: "wall", x: 16 * 4, y: 0, c:code};
        case "xxxxxxx x": return {type: "wall", x: 16 * 4, y: 16 * 2, c:code};
        case "    xx xx":
        case "  x xx xx":
        case "    xxxxx":
        case "    xx x ":
        case "xxxxxxxx ": return {type: "wall", x: 0, y: 0, c:code};
        case "xx xx xx ":
        case " xx x  xx":
        case " x  x xx ":
        case "xxxxx xx ": return {type: "wall", x: 0, y: 16, c:code};
        case "xx xx  x ":
        case " x xx xx ":
        case " xxxxx xx":
        case "xxxxx  x ": return {type: "wall", x: 16 * 5, y: 16, c:code};
        case "x  xx xx ":
        case "   xx xxx":
        case "   xx  x ":
        case "   xx  xx":
        case "xxxxxx xx": return {type: "wall", x: 16 * 2, y: 0, c:code};
        default: return {type: "wall", x: 16 * 3, y: 0, c:code};
    }
}
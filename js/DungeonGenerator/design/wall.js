/*
1           2               2           3           4
BOTTOM      RIGHTUP         VERTICAL    TUP         CROSS
0X0         0X0             0X0         0X0         0X0
0X0         XX0             0X0         XXX         XXX
000         000             0X0         000         0X0

RIGHT       LEFTUP          HORIZONTAL  TRIGHT      FULL
000         0X0             000         0X0         XXX
XX0         0XX             XXX         0XX         XXX
000         000             000         0X0         XXX

LEFT        RIGHTBOTTOM                 TBOTTOM
000         000                         000
0XX         XX0                         XXX
000         0X0                         0X0

TOP         LEFTBOTTOM                  TLEFT
000         000                         0X0
0X0         0XX                         XX0
0X0         0X0                         0X0

*/
var getBgWallPosition = function(code) {
    var TOP = {type: "wall", x: 16 * 4, y: 16, c:code};
    var LEFT = {type: "wall", x: 0, y: 16 * 2, c:code};
    var RIGHT = {type: "wall", x: 16 * 2, y: 16 * 2, c:code};
    var BOTTOM = {type: "wall", x: 16, y: 16, c:code};
    var RIGHTUP = RIGHT;
    var LEFTUP = LEFT;
    var RIGHTBOTTOM = {type: "wall", x: 16 * 2, y: 0, c:code};
    var LEFTBOTTOM = {type: "wall", x: 0, y: 0, c:code};
    var VERTICAL = {type: "wall", x: 0, y: 16, c:code};
    var HORIZONTAL = {type: "wall", x: 16, y: 0, c:code};
    var TUP = {type: "wall", x: 16, y: 0, c:code};
    var TRIGHT = {type: "wall", x: 16 * 3, y: 16, c:code};
    var TLEFT = {type: "wall", x: 16 * 5, y: 16, c:code};
    var TBOTTOM = {type: "wall", x: 16 * 4, y: 0, c:code};
    var CROSS = TOP;
    var FULL = {type: "wall", x: 16 * 3, y: 0, c:code};
    
    var p = 0;
    if (code[1] == "x") ++p;
    if (code[3] == "x") ++p;
    if (code[5] == "x") ++p;
    if (code[7] == "x") ++p;

    if (p == 1) {
        if (code[1] == "x") {
            return BOTTOM;
        } else if (code[3] == "x") {
            return RIGHT;
        } else if (code[5] == "x") {
            return LEFT;
        } else {
            return TOP;
        }
    }

    if (p == 2) {
        if (code[1] == "x" && code[5] == "x") {
            return LEFTUP;
        } else if (code[1] == "x" && code[3] == "x") {
            return RIGHTUP;
        } else if (code[3] == "x" && code[7] == "x") {
            return RIGHTBOTTOM;
        } else if (code[5] == "x" && code[7] == "x") {
            return LEFTBOTTOM;
        } else if (code[1] == "x" && code[7] == "x") {
            return VERTICAL;
        } else {
            return HORIZONTAL;
        }
    }

    if (p == 3) {
        if (code[1] == "x" && code[3] == "x" && code[5] == "x") {
            if (code[0] == "x" && code[2] == "x") {
                return HORIZONTAL;
            }
            return TUP;
        } else if (code[1] == "x" && code[3] == "x" && code[7] == "x") {
            if (code[0] == "x" && code[6] == "x") {
                return VERTICAL;
            }
            return TLEFT;
        } else if (code[5] == "x" && code[3] == "x" && code[7] == "x") {
            if (code[8] == "x" && code[6] == "x") {
                return HORIZONTAL;
            }
            return TBOTTOM;
        } else {
            if (code[8] == "x" && code[2] == "x") {
                return VERTICAL;
            }
            return TRIGHT;
        }
    }

    if (p == 4) {
        if (code == "xxxxxxxxx") {
            return FULL;
        } else if (code == "xxxxxxxx ") {
            return LEFTBOTTOM
        } else if (code == " xxxxxxxx") {
            return RIGHTUP;
        } else if (code == "xx xxxxxx") {
            return LEFTUP;
        } else if (code == "xxxxxx xx") {
            return RIGHTBOTTOM;
        }
        return CROSS;
    }
}
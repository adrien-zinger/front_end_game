var build = function(stats) {
    let dungeon = new Dungeon(stats);
    dungeon.generate();
    let table = [];
    for (let y = 0; y < dungeon.size[1]; y ++) {
        let row = [];
        for (let x = 0; x < dungeon.size[0]; x++) {
            row[x] = dungeon.walls.get([x, y]) ? 'x' : ' ';
        }
        table[y] = row;
    }
    console.log(table);
    return table;
}

var design = function(table, type) {
    if (type == "classic") {
        for (var y = 0; y < table.length; ++y) {
            for (var x = 0; x < table[y].length; ++x) {
                
            }
        }
    }
}

var buildClassic = function() {
    return build({
        size: [100, 50], 
        //seed: 'abcd', //omit for generated seed
        rooms: {
            initial: {
                min_size: [2, 2],
                max_size: [5, 5],
                max_exits: 1,
                //position: [0, 0] //OPTIONAL pos of initial room 
            },
            any: {
                min_size: [2, 2],
                max_size: [5, 5],
                max_exits: 4
            }
        },
        max_corridor_length: 6,
        min_corridor_length: 2,
        corridor_density: 2, //corridors per room
        symmetric_rooms: false, // exits must be in the center of a wall if true
        interconnects: 1, //extra corridors to connect rooms and make circular paths. not 100% guaranteed
        max_interconnect_length: 10,
        room_count: 10,
        weapons: 2,
        armors: 2,
        monster: [
            {type: 'classic', number: 2}
        ]
    });
}
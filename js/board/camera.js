function restrictCamera(b, camera) {
    var ret = true;
    if (camera.y < 0) {
        camera.y = 0;
        ret = false;
    }
    if (camera.x < 0) {
        camera.x = 0;
        ret = false;
    }
    if (camera.h >= b.length) {
        camera.h = b.length - 1;
        ret = false;
    }
    if (camera.w >= b[0].length) {
        camera.w = b[0].length - 1;
        ret = false
    }
    if (camera.y > b.length - camera.h) {
        camera.y = b.length - camera.h;
        ret = false;
    }
    if (camera.x > b[0].length - camera.w) {
        camera.x = b[0].length - camera.w;
        ret = false;
    }
    return ret;
}

function updateCamera(camera) {
    game.get("board").val(board => {
        var b = JSON.parse(board);
        if (!restrictCamera(b, camera)) return;
        showBoard(b, camera);
    });
}

function plus() {
    camera.h += 1;
    camera.w += 1;
    updateCamera(camera);
}

function minus() {
    camera.h -= 1;
    camera.w -= 1;
    updateCamera(camera);
}

function left() {
    camera.x -= 1;
    updateCamera(camera);
}

function right() {
    camera.x += 1;
    updateCamera(camera);
}

function up() {
    camera.y -= 1;
    updateCamera(camera);
}

function down() {
    camera.y += 1;
    updateCamera(camera);
}
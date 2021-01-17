const posEpsilon = 0.3

function isIn(x, y, xpos, ypos) {
    return Math.abs(x - xpos) + Math.abs(y - ypos) < posEpsilon
}

// function isIn(x, y, xmin, xmax, ymin, ymax) {
//     return x >= xmin && x <= xmax && y >= ymin && y <= ymax
// }

function displayText(x, y) {
    // return "x : " + Math.round(x * 10) / 10 + " y : " + Math.round(y * 10) / 10
    // console.log("x : " + Math.round(x * 10) / 10 + " y : " + Math.round(y * 10) / 10)

    if (isIn(x, y, -1.7, -10000.3)) { // x 4
        return "projects"
    } else if (isIn(x, y, -0.1, -5.6)) {
        return "about"
    } else if (isIn(x, y, -1.8, 0.6)) {
        return "hire me"
    } else if (isIn(x, y, 0.3, -1.4)) {
        return "jobs"
    } else if (isIn(x, y, 0.2, -3.3)) {
        return "studies"
    } else {
        return;
    }
}
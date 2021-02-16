const posEpsilon = 0.3

function getDiff(pos, pos2) {
    return Math.min(Math.abs(pos - pos2), Math.abs(pos - (pos2 + (2 * Math.PI))), Math.abs(pos - (pos2 - (2 * Math.PI))))
}

function isIn(x, y, xpos, ypos) {
    return (getDiff(x, xpos) + getDiff(y, ypos)) < posEpsilon
}

function displayText(x, y) {

    // let pos = "x : " + Math.round(x * 10) / 10 + " y : " + Math.round(y * 10) / 10 

    if (isIn(x, y, 6.2, 0.6) || isIn(x, y, 3.2, 3.8)) {
        return "about"
    } else if (isIn(x, y, 0.3, 4.8) || isIn(x, y, 2.8, 1.7)) {
        return "jobs"
    } else if (isIn(x, y, 0.2, 3) || isIn(x, y, 3, 6.2)) {
        return "studies"
    } else if (x >= 4.3 && x <= 5.1) { // isIn(x, y, 5, 0.1) || isIn(x, y, 4.5, 3.3) || isIn(x, y, 4.5, 4.4) || isIn(x, y, 4.3, 2.8) || isIn(x, y, 5.1, 6) || isIn(x, y, 4.9, 1) || isIn(x, y, 4.9, 3)
        return "projects"
    } else if (isIn(x, y, 1.9, 4.4) || isIn(x, y, 1.3, 1.2)) { // isIn(x, y, 1.3, 1.2) || isIn(x, y, 1.8, 4.3) || isIn(x, y, 1.8, 5.1) || isIn(x, y, 2.1, 4.4) || isIn(x, y, 1.2, 0.6)
        return "hire me"
    } else {
        return;//pos;
    }
}
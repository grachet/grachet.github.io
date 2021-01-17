function isIn(x, y, xmin, xmax, ymin, ymax) {
    return x >= xmin && x <= xmax && y >= ymin && y <= ymax
}

function displayText(x, y) {
    return "x : " + Math.round(x * 10) / 10 + " y : " + Math.round(y * 10) / 10
    // console.log("x : " + Math.round(x * 10) / 10 + " y : " + Math.round(y * 10) / 10)

    if (false) {
        return "projects"
    } else if (isIn(x, y, -0.2, 0.1, 0.3, 1)) {  // x 0.1 -0.2 y 1 0.3
        return "about"
    } else if (false) {
        return "hire me"
    } else if (false) {
        return "jobs"
    } else if (false) {
        return "studies"
    } else {
        return;
    }
}
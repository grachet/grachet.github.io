var loop = new SeamlessLoop();

function soundsLoaded() {
    loop.start("music");
    loop.volume(0.3);
};

loop.addUri("/music/music.mp3", 23145, "music");
loop.callback(soundsLoaded);

var icon = document.getElementById('soundIcon');

let isMute = false

icon.onclick = function () {
    if (isMute) {
        isMute = false
        icon.src = "/images/sound.svg"
        loop.start("music");
    } else {
        isMute = true
        icon.src = "/images/no-sound.svg"
        loop.stop("music");
    }
}; 
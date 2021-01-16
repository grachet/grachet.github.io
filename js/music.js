var loop = new SeamlessLoop();

function soundsLoaded() {
    loop.start("music");
    loop.volume(0.3);
};

loop.addUri("/music/music.mp3", 23145, "music");
loop.callback(soundsLoaded);
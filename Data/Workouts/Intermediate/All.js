var video = document.getElementById("myVideo");
var playButton = document.getElementById("playButton");

video.pause();

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playButton.innerHTML = "Pause";
    } else {
        video.pause();
        playButton.innerHTML = "Resume";
    }
});

video.currentTime = 0;

const images = [
    { path: 'image1.gif', text: 'Run' },
    { path: 'image2.gif', text: 'Knee PushupsArm' },
    { path: 'image3.gif', text: 'Plank' },
    { path: 'image4.gif', text: 'Incline pushups' },
    { path: 'image5.gif', text: 'Child\'s Pose' },
];

let currentIndex = 0;

function updateImage() {
    const { path, text } = images[currentIndex];
    document.getElementById('myImage').src = path;
    document.getElementById('imageText').innerText = text;

    resetVideo();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();

    document.getElementById('playButton').innerHTML = "Start";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();

    document.getElementById('playButton').innerHTML = "Start";
}

function resetVideo() {
    const video = document.getElementById('myVideo');
    video.pause();
    video.currentTime = 0;
}

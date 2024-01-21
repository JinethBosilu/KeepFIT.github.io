const images = [
    { path: 'image1.gif', text: 'Jumping Jacks' },
    { path: 'image2.gif', text: 'Squats' },
    { path: 'image3.gif', text: 'Russian Twist' },
    { path: 'image4.gif', text: 'Floor Triceps' },
    { path: 'image5.gif', text: 'Cobra Stretch' },
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

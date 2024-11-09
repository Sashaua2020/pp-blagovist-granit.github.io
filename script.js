let images = [
    "img/GranitPM/MG_1.jpg",
    "img/GranitPM/MG_2.jpg",
    "img/GranitPM/MG_3.jpg",
    "img/GranitPM/MG_4.jpg"
];

let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById('slider-image');
    imageElement.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

window.onload = function() {
    showImage(currentIndex);
}

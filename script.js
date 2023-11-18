let currentPhotoIndex = 0;

function showPhotos(section) {
    let photos = document.querySelector(`.${section}`);
    let photoItems = photos.querySelectorAll('img');

    for (let i = 0; i < photoItems.length; i++) {
        photoItems[i].style.display = 'none';
    }

    currentPhotoIndex++;

    if (currentPhotoIndex >= photoItems.length) {
        currentPhotoIndex = 0;
    }

    photoItems[currentPhotoIndex].style.display = 'block';
}

function changeSlide(section) {
    showPhotos(section);
}

// Show photos of the first section initially
showPhotos('nature');
showPhotos('cultural');
showPhotos('monuments');

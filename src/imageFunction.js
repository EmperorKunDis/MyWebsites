function changeImageRandomly() {
    fetch('imageList.json')
        .then(response => {
            if (!response) {
                throw new Error('Image list could not be fetched.');
            }
            return response.json();
        })
        .then(images => {
            if (!images) {
                throw new Error('Image list could not be parsed.');
            }
            const index = Math.floor(Math.random() * images.length);
            if (index < 0 || index >= images.length) {
                throw new Error('Invalid index for image list.');
            }
            const imageUrl = images[index];
            const imageElement = document.getElementById('projectImage');
            if (!imageElement) {
                throw new Error('Element with ID "projectImage" not found.');
            }
            imageElement.src = imageUrl;
        })
        .catch(error => {
            console.error('Error changing image randomly.', error);
            throw error;
        });
}


// Call the function initially to set the first image
changeImageRandomly();

// Run the function every 5 seconds
setInterval(changeImageRandomly, 5000);
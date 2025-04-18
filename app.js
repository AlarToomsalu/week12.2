//[ ]   { }
const images = ['1.jpeg', '2.jpg', '3.jpg', '4.jpg'];

const targetImage = document.querySelector('.me-image img');
let i = 1;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';
    setTimeout(() => {

        if (i == images.length - 0) {
            i = 0;
        }
        targetImage.src = 'images/' + images[i];
        i++;
        targetImage.style.opacity = '1';
    }, 500);






});
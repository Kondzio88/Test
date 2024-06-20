import  {cartArray} from './shared.js'



const popupActive = () => {
    popupZoom.style.display = 'flex'
    
}

const popupZoom = document.querySelector('.gallery-popup')
const galleryImgBox = document.querySelectorAll('.gallery-container .box')
 console.log(galleryImgBox);
galleryImgBox.forEach(box => {
    box.addEventListener('click', () => {
        const imgSrc = box.querySelector('img').getAttribute('src')
        const popupImg = popupZoom.querySelector('img')
        popupImg.src = imgSrc
        popupActive()
    })
})
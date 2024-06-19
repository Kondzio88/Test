import { initCart, cartArray} from './shared.js'

document.addEventListener('DOMContentLoaded', () => {
	initCart()

})

const popupActive = () => {
    popupZoom.style.display = 'flex'
    const closeBtn = popupZoom.querySelector('.icon i')
    console.log(closeBtn)
    closeBtn.addEventListener('click', () => {
        popupZoom.style.display = 'none'
    })
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
let cart = document.querySelector('#cart')

let login = document.querySelector('.login-form')
let userBtn = document.querySelector('#login')
let card = document.querySelector('.shopping-cart')


const menuBtn =document.querySelector('#menu')
const nav = document.querySelector('.nav-bar')


cart.addEventListener('click', () => {
	card.classList.toggle('active')
	login.classList.remove('active')
})

userBtn.addEventListener('click', () => {
	login.classList.toggle('active')
	card.classList.remove('active')
})

window.onscroll = () => {
	card.classList.remove('active')
	login.classList.remove('active')
	nav.classList.remove('active')
}

//  swipper js

var swiper = new Swiper('.home-slider', {
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

menuBtn.addEventListener('click',()=>{
	nav.classList.toggle('active')
	login.classList.remove('active')
	card.classList.remove('active')
})



let day = new Date().getDate()
let month =new Date().getMonth() + 1
let year = new Date().getUTCFullYear()

console.log(year);
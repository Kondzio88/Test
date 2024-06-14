let cart = document.querySelector('#cart')

let login = document.querySelector('.login-form')
let userBtn = document.querySelector('#login')
let card = document.querySelector('.shopping-cart')

cart.addEventListener('click', () => {
	card.classList.toggle('active')
    login.classList.remove('active')

})

userBtn.addEventListener('click', () => {
	login.classList.toggle('active')
	card.classList.remove('active')
})


var swiper = new Swiper('.home-slider',{
	autoplay:{
		delay:7500,
		disableOnInteraction:false,
	},
	grabCursor:true,
	loop:true,
	centeredSlides:true,
	navigation:{
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

})
// Zdefiniowanie zmiennej cartArray
let cartArray = JSON.parse(localStorage.getItem('cartArray')) || []
const menuBtn = document.querySelector('#menu')

const totalHtml = document.querySelector('.shopping-cart .total')
const cart = document.querySelector('#cart')
const shoppingCart = document.querySelector('.shopping-cart')

const basketNumber = document.querySelector('.shopping-cart-number')

const userBtn = document.querySelector('#login')
const loginForm = document.querySelector('.login-form')
const nav = document.querySelector('.nav-bar')
const popupZoom = document.querySelector('.gallery-popup')

const infoContainer = document.querySelector('.info-container')
const infoContainerLogin = document.querySelector('.info-container-login')
const infoContainerMesseg = document.querySelector('.info-container-messeg')

// info functions

const info = param => {
	param.classList.add('active')
	setTimeout(() => {
		param.classList.remove('active')
	}, 2000)
	if (loginForm) {
		loginForm.classList.remove('active')
	}
}

// calculate functions

const calculateTotalItems = () => {
	let totalItems = 0
	if (cartArray.length < 1) {
		basketNumber.innerHTML = ''
	} else {
		cartArray.forEach(item => {
			totalItems += item.quantity
			basketNumber.innerHTML = totalItems
		})
	}
}

calculateTotalItems()

const calculateTotalPrice = () => {
	let total = 0

	cartArray.forEach(item => {
		total += item.price * item.quantity
		totalHtml.innerHTML = `<h3 class="total">razem :${total}$</h3>`
		totalHtml.classList.add('.total')
		shoppingCart.appendChild(totalHtml)
	})
}
// add product to basket functions

const addToCart = product => {
	const exist = cartArray.find(x => x.id === product.id)

	info(infoContainer)
	
	if (exist) {
		exist.quantity++
	} else {
		cartArray.push({ ...product, quantity: 1 })
	}
	localStorage.setItem('cartArray', JSON.stringify(cartArray))
	renderCartBasket()
	calculateTotalPrice()
	calculateTotalItems()
}

// Funkcja renderująca zawartość koszyka
const renderCartBasket = () => {
	const shoppingCart = document.querySelector('.shopping-cart')

	shoppingCart.innerHTML = ''

	cartArray.forEach(target => {
		const cartItemHtml = document.createElement('div')
		cartItemHtml.classList.add('box')
		cartItemHtml.innerHTML = `<i class="fas fa-times"></i>
		<img src=${target.img} alt="">
		<div class="content">
		<h3>${target.name}</h3>
		<div class="content">
		<span class="quantity">${target.quantity}</span>
		<span class="price">${target.price}$</span>
		</div>
		</div>`

		shoppingCart.appendChild(cartItemHtml)
		calculateTotalPrice()

		const cancelBtn = cartItemHtml.querySelector('.fa-times')
		cancelBtn.addEventListener('click', () => {
			if (target.quantity > 1) {
				target.quantity--
			} else {
				cartArray = cartArray.filter(x => x.id !== target.id)
				if (cartArray.length === 0) {
					shoppingCart.classList.remove('active')
				}
			}

			localStorage.setItem('cartArray', JSON.stringify(cartArray))
			renderCartBasket()
			calculateTotalPrice()
			calculateTotalItems()
		})
	})
}

// event listeners

menuBtn.addEventListener('click', () => {
	nav.classList.toggle('active')
	loginForm.classList.remove('active')
	shoppingCart.classList.remove('active')
	if (popupZoom) {
		popupZoom.style.display = 'none'
	}
})

userBtn.addEventListener('click', () => {
	loginForm.classList.toggle('active')
	shoppingCart.classList.remove('active')
	nav.classList.remove('active')
	if (popupZoom) {
		popupZoom.style.display = 'none'
	}
	const btn = loginForm.querySelector('.btn')
	btn.addEventListener('click', () => {
		info(infoContainerLogin)
	})
})

cart.addEventListener('click', () => {
	if (cartArray.length > 0) {
		shoppingCart.classList.toggle('active')
	}
	loginForm.classList.remove('active')
	nav.classList.remove('active')
	renderCartBasket()
	if (popupZoom) {
		popupZoom.style.display = 'none'
	}
})

// Obsługa zdarzenia scroll
const handleScroll = () => {
	window.onscroll = () => {
		shoppingCart.classList.remove('active')
		loginForm.classList.remove('active')
		nav.classList.remove('active')
		if (popupZoom) {
			popupZoom.style.display = 'none'
		}
	}
}

// data blogs section

const dateEl = document.querySelectorAll('.icons .date')
const year = new Date().getUTCFullYear()
const day = new Date().getDate()
const month = new Date().getMonth() + 1
dateEl.forEach(el => {
	el.innerHTML = `<i class="fas fa-calendar"></i>${day}.${month}.${year}`
})
handleScroll()

// Eksportowanie funkcji i zmiennej
export { addToCart, cartArray, renderCartBasket, info }

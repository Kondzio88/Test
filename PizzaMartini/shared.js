const shopNumberItems = document.querySelector('.header .icons .shopping-cart-number')
// Zdefiniowanie zmiennej cartArray
let cartArray = JSON.parse(localStorage.getItem('cartArray')) || []
const menuBtn = document.querySelector('#menu')
// Funkcja dodająca produkt do koszyka
const addToCart = product => {
	const exist = cartArray.find(x => x.id === product.id)

	if (exist) {
		exist.quantity++
	} else {
		cartArray.push({ ...product, quantity: 1 })
	}
	localStorage.setItem('cartArray', JSON.stringify(cartArray))
	renderCartBasket()
}




const cart = document.querySelector('#cart')

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
                <span class="quantity">${target.quantity}</span>
                <span class="price">${target.price}$</span>
			</div>`

		shoppingCart.appendChild(cartItemHtml)

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
		})
	})
}

// event listeners

const shoppingCart = document.querySelector('.shopping-cart')

const loginForm = document.querySelector('.login-form')
const nav = document.querySelector('.nav-bar')
const popupZoom = document.querySelector('.gallery-popup')

menuBtn.addEventListener('click', () => {
	nav.classList.toggle('active')
	loginForm.classList.remove('active')
	shoppingCart.classList.remove('active')
	if (popupZoom) {
		popupZoom.style.display = 'none'
	}
})

const userBtn = document.querySelector('#login')
userBtn.addEventListener('click', () => {
	loginForm.classList.toggle('active')
	shoppingCart.classList.remove('active')
	nav.classList.remove('active')
	if (popupZoom) {
		popupZoom.style.display = 'none'
	}
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

const dateEl = document.querySelectorAll('.icons .date')
const year = new Date().getUTCFullYear()
const day = new Date().getDate()
const month = new Date().getMonth() + 1
dateEl.forEach(el => {
	el.innerHTML = `<i class="fas fa-calendar"></i>${day}.${month}.${year}`
})
handleScroll()

// Eksportowanie funkcji i zmiennej
export { addToCart, cartArray ,renderCartBasket}
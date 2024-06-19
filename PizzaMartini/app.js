document.addEventListener('DOMContentLoaded', () => {
	const cart = document.querySelector('#cart')
	const loginForm = document.querySelector('.login-form')
	const userBtn = document.querySelector('#login')
	const shoppingCart = document.querySelector('.shopping-cart')
	const menuBtn = document.querySelector('#menu')
	const nav = document.querySelector('.nav-bar')
	const menuPreviewContainer = document.querySelector('.menu-preview-container')
	const menuPreviewBox = document.querySelectorAll('.menu-preview')
	const allBox = document.querySelectorAll('.menu .box')
	const dateEl = document.querySelectorAll('.date')

	const shopCart = document.querySelector('.pizzas .box-container')

// Toggle navigation menu visibility
menuBtn.addEventListener('click', () => {
	nav.classList.toggle('active')
	loginForm.classList.remove('active')
	shoppingCart.classList.remove('active')
	popupZoom.style.display = 'none'
})


	// render shop cart
	let cartArray = []



	
const renderShopCart = () => {
		products.forEach(product => {
			const itemHtml = document.createElement('div')
			itemHtml.className = 'box'
			itemHtml.innerHTML = `<img src=${product.img} alt="">
                <h3>${product.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$${product.price}<span>$${product.price2}</span></div>
                <div class="btn">dodaj</div>`

			shopCart.appendChild(itemHtml)

			const addBtn = itemHtml.querySelector('.btn')
			addBtn.addEventListener('click', () => {
				const addProduct = products.find(x => x.id === product.id)
				const exist = cartArray.find(x => x.id === product.id)

				if (exist) {
					exist.quantity++
				} else {
					cartArray.push({ ...addProduct, quantity: 1 })
				}
				renderCartBasket()
			})
		})
	}
	renderShopCart()

	const renderCartBasket = () => {
		shoppingCart.innerHTML = ''

		cartArray.forEach(target => {
			const cartItemHtml = document.createElement('div')
			cartItemHtml.classList.add('box')
			cartItemHtml.innerHTML = `<i class="fas fa-times"></i>
                <img src=${target.img} alt="">
                <div class="content">
                    <h3>${target.name}</h3>
                    <span class="quantity">${target.quantity}</span>
                    <span class="multiply"></span>
                    <span class="price">$ ${target.price}</span>`

			
			shoppingCart.appendChild(cartItemHtml)

			const cancelBtn = cartItemHtml.querySelector('.fa-times')
			cancelBtn.addEventListener('click',()=>{
				if(target.quantity > 1){
					target.quantity--
				}else{
					cartArray = cartArray.filter(x => x.id !== target.id)
				}
				renderCartBasket()
			})
		
		})
	}

	console.log(shopCart) // Menu box click handling
	allBox.forEach(box => {
		box.addEventListener('click', () => {
			menuPreviewContainer.style.display = 'flex'
			const name = box.getAttribute('data-name')

			menuPreviewBox.forEach(prev => {
				const target = prev.getAttribute('data-target')

				if (name == target) {
					prev.classList.add('active')
				} else {
					prev.classList.remove('active')
				}

				prev.querySelector('.btn').addEventListener('click', () => {
					menuPreviewContainer.style.display = 'none'
				})
			})

			// Dodajemy event listener dla przycisków zamknięcia
			document.querySelectorAll('#close').forEach(close => {
				close.addEventListener('click', () => {
					menuPreviewContainer.style.display = 'none' // Ukryj kontener
					menuPreviewBox.forEach(prev => {
						prev.classList.remove('active') // Usuń klasę active ze wszystkich elementów
					})
				})
			})
		})
	})

	// Toggle shopping cart visibility
	cart.addEventListener('click', () => {
		shoppingCart.classList.toggle('active')
		loginForm.classList.remove('active')
		nav.classList.remove('active')
		popupZoom.style.display = 'none'
	})

	// Toggle login form visibility
	userBtn.addEventListener('click', () => {
		loginForm.classList.toggle('active')
		shoppingCart.classList.remove('active')
		nav.classList.remove('active')
		popupZoom.style.display = 'none'
	})

	// Initialize Swiper sliders
	new Swiper('.home-slider', {
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

	new Swiper('.menu-slider', {
		grabCursor: true,
		loop: true,
		centeredSlides: true,
		autoHeight: true,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})

	// Initzialize gallery zoom

	const popupZoom = document.querySelector('.gallery-popup')

	const galleryImgBox = document.querySelectorAll('.gallery-container .box')

	galleryImgBox.forEach(box => {
		box.addEventListener('click', () => {
			const imgSrc = box.querySelector('img').getAttribute('src')
			const popupImg = popupZoom.querySelector('img')
			popupImg.src = imgSrc
			popupActive()
		})
	})

	const popupActive = () => {
		popupZoom.style.display = 'flex'
		const closeBtn = popupZoom.querySelector('.icon i')
		console.log(closeBtn)
		closeBtn.addEventListener('click', () => {
			popupZoom.style.display = 'none'
		})
	}

	

	// Hide elements on scroll
	window.onscroll = () => {
		shoppingCart.classList.remove('active')
		loginForm.classList.remove('active')
		nav.classList.remove('active')
		popupZoom.style.display = 'none'
	}

	// Set current date in the blog section
	const year = new Date().getUTCFullYear()
	const day = new Date().getDate()
	const month = new Date().getMonth() + 1
	dateEl.forEach(el => {
		el.innerHTML = `<i class="fas fa-calendar"></i>${day}.${month}.${year}`
	})
})

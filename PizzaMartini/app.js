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

	// Menu box click handling
	allBox.forEach(box => {
		box.addEventListener('click', () => {
			menuPreviewContainer.style.display = 'flex'
			const name = box.getAttribute('data-name')

			menuPreviewBox.forEach(prev => {
				const target = prev.getAttribute('data-target')
				if (name == target) {
					prev.classList.add('active')
				}
			})

			menuPreviewContainer.querySelector('.btn').addEventListener('click',() => {
				menuPreviewContainer.style.display = 'none'
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
	})

	// Toggle login form visibility
	userBtn.addEventListener('click', () => {
		loginForm.classList.toggle('active')
		shoppingCart.classList.remove('active')
		nav.classList.remove('active')
	})

	// Hide elements on scroll
	window.onscroll = () => {
		shoppingCart.classList.remove('active')
		loginForm.classList.remove('active')
		nav.classList.remove('active')
	}

	// Set current date in the blog section
	const year = new Date().getUTCFullYear()
	const day = new Date().getDate()
	const month = new Date().getMonth() + 1
	dateEl.forEach(el => {
		el.innerHTML = `<i class="fas fa-calendar"></i>${day}.${month}.${year}`
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

	// Toggle navigation menu visibility
	menuBtn.addEventListener('click', () => {
		nav.classList.toggle('active')
		loginForm.classList.remove('active')
		shoppingCart.classList.remove('active')
	})
})

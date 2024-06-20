import { cartArray, renderCartBasket, addToCart } from './shared.js'
import { products } from './products.js'

document.addEventListener('DOMContentLoaded', () => {
	const menuContainer = document.querySelector('.menu .box-container')
	const menuPreviewContainer = document.querySelector('.menu-preview-container')
	const menuPreviewBox = document.querySelector('.menu-preview')

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

	// Dodanie produktów do menu
	products.forEach(item => {
		const htmlEl = document.createElement('div')
		htmlEl.setAttribute('data-id', `${item.id}`) // Ustawienie data-id jako string

		htmlEl.classList.add('box')
		htmlEl.innerHTML = `<div class="info">
                                    <h3>${item.name}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus id et est.</p>
                                </div>
                                <div class="price">$${item.price}</div>`

		menuContainer.appendChild(htmlEl)
	})

	const allBox = document.querySelectorAll('.menu .box')

	allBox.forEach(box => {
		box.addEventListener('click', () => {
			const id = box.getAttribute('data-id') // Pobranie id produktu jako string

			menuPreviewContainer.style.display = 'flex'

			const item = products.find(product => `${product.id}` === id) // Porównanie po konwertowanym do stringa id

			if (item) {
				menuPreviewBox.innerHTML = `<h3>${item.name}</h3>
                                            <div class="stars">
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star-half-alt"></div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quidem reprehenderit vitae?</p>
                                            <div class="price">$${item.price}</div>
                                            <div  class="btn">zamów</div>`

				const addBtn = menuPreviewBox.querySelector('.btn')
				console.log(addBtn)
				addBtn.addEventListener('click', () => {
					addToCart(item)
					menuPreviewBox.classList.remove('active')
					menuPreviewContainer.style.display = 'none'
				})

				menuPreviewBox.classList.add('active')
			} else {
				console.error(`Product with id ${id} not found.`)
			}
		})
	})

	document.querySelectorAll('#close').forEach(close => {
		close.addEventListener('click', () => {
			menuPreviewContainer.style.display = 'none'
			menuPreviewBox.classList.remove('active')
		})
	})
})

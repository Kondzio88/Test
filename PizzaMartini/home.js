import { addToCart } from './shared.js'

document.addEventListener('DOMContentLoaded', () => {
	// Inicjalizowanie slidera na stronie głównej
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

	// Renderowanie produktów w koszyku
	const shopCart = document.querySelector('.pizzas .box-container')
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
				addToCart(product)
			})
		})
	}

	renderShopCart()
})

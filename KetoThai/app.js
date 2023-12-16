const hamburger = document.querySelector('#mobile-menu-open');
const mobileMenu = document.querySelector(".nav-links-mobile");
const closeMenu = document.querySelector('#mobile-menu-close')
hamburger.addEventListener("click", () => {
	mobileMenu.classList.toggle("active");
	
});
closeMenu.addEventListener('click',() => {
    mobileMenu.classList.toggle('active')   
})

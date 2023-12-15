const hamburger = document.querySelector('#mobile-menu-open');
const mobileMenu = document.querySelector(".nav-links-mobile");
const closeMenu = document.querySelector('#mobile-menu-close')
hamburger.addEventListener("click", () => {
	mobileMenu.classList.toggle("active");
	hamburger.style.display = "none";
    closeMenu.style.display = "block"
});
closeMenu.addEventListener('click',() => {
    mobileMenu.classList.toggle('active')
    closeMenu.style.display ="none";
    hamburger.style.display =" block"
})

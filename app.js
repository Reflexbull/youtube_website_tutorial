const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

//Display Mobile Menu
menu.addEventListener("click", function() {
    const mobileMenu = () => {
        menu.classList.toggle("is-active");
        menuLinks.classList.toggle("active");
    }
})
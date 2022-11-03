navMenu = document.querySelector(".nav_menu");
openMenuBtn = document.querySelector(".open_menu");
closeMenuBtn = document.querySelector(".close_menu");
const navMenuLinks = document.querySelectorAll(".nav_menu a[href^='#']")

function toggleMenu() {
    navMenu.classList.toggle("nav_menu-opened");
}

navMenuLinks.forEach(navMenuLink => {
    navMenuLink.addEventListener("click", function() {
        navMenu.classList.remove("nav_menu-opened");
    })
})

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// ABOUT ME

aboutMeMenu = document.querySelector(".about_me_menu")
aboutMeBtn = document.querySelector(".open_about_me")
aboutMeLinks = document.querySelectorAll(".about_me_menu li a[href^='#']")

aboutMeBtn.addEventListener("click", () => {
    aboutMeMenu.classList.toggle("about_me_menu-visible")
})

aboutMeLinks.forEach(navMenuLink => {
    navMenuLink.addEventListener("click", () => {
        aboutMeMenu.classList.toggle("about_me_menu-visible")
    })
})
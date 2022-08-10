const hamburgerButton = document.querySelector(".hamburger-button");
const closeButton = document.querySelector(".close-button");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
})

closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
})

document.querySelectorAll(".mobile-link").forEach(n => n.addEventListener("click", ()=> {
    mobileMenu.classList.remove("active");
}))

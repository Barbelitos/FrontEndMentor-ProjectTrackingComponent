let navToggle = document.querySelector(".nav-toggle");
let openMenu = document.querySelector(".open-list");
let closeMenu = document.querySelector(".close-list");
let navMenu = document.querySelector(".nav-list");

navToggle.addEventListener("click", (e) => {
  navMenu.classList.toggle("show-menu");
  closeMenu.classList.toggle("show-close");
  openMenu.classList.toggle("hide-open");
});

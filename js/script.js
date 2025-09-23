const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar_links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggle.classList.toggle("active");
});

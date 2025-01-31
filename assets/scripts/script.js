// nav scroll
document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const tentang = document.getElementById("tentang");

  if (window.scrollY >= tentang.offsetTop) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// hamburger menu
const hamburgerMenu = document.getElementById("hamburger-icon");
const navbar = document.getElementById("navbar");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navbar.classList.toggle("active");
});

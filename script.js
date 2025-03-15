let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav div ul li a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));

      let activeLink = document.querySelector(`nav div ul li a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

let menuToggle = document.querySelector('.menu-toggle');
let navItems = document.querySelector('.nav-items');

menuToggle.addEventListener('click', () => {
  navItems.classList.toggle('active');
  menuToggle.classList.toggle('active'); // Tambahan untuk animasi
});
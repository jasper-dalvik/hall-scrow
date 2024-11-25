function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.getElementById("menuIcon");

  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuIcon.innerHTML = "&#10006;"; // X icon
  } else {
    menuIcon.innerHTML = "&#9776;"; // Hamburger icon
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu_item");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((e) => {
    e.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});

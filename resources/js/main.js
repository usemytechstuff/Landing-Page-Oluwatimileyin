
window.onresize = function(event) {
  if (!window.matchMedia("(max-width: 500px)").matches) {
    document.querySelector(".nav_ul").classList.remove("open_menu");
    document.querySelector(".hamburger_icon").classList.remove("active-one");
  }
};

document.querySelector(".hamburger_icon").addEventListener("click", () => {
  document.querySelector(".hamburger_icon").classList.toggle("active-one");
  document.querySelector(".nav_ul").classList.toggle("open_menu");
});

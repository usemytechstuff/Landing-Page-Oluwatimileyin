window.addEventListener('load', ()=>{
   TweenMax.fromTo('body', 1, {opacity: 0}, {opacity: 1})
})

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

const data = [
  { name: "Equipment", link: "#" },
  { name: "Help", link: "#" },
  { name: "About Us", link: "about.html" },
  { name: "Sign Up", link: "https://usemytechstuff.netlify.com/register" },
  { name: "Login", link: "https://usemytechstuff.netlify.com/" }
];
class Navbar {
  constructor(container, data) {
    this.container = container;
    this.data = data;
    this.ul = document.createElement("ul");
    this.ul.classList.add("nav_ul");
    this.createLi();
  }

  createLi() {
    this.data.forEach(linkContent => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.setAttribute("href", `${linkContent.link}`);
      a.textContent = linkContent.name;
      li.appendChild(a);
      this.ul.appendChild(li);
    });
    this.container.insertAdjacentElement("afterbegin", this.ul);
  }
}

const container = document.querySelector(".nav");
new Navbar(container, data);

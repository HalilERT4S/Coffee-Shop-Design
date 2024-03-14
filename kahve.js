let container = document.getElementsByClassName("container");
for (let i = 0; i < container.length; i++) {
  for (let k = 0; k < container[i].childNodes.length; k++) {
    if (container[i].childNodes[k].nodeType === 3) {
      container[i].removeChild(container[i].childNodes[k]);
    }
  }
}

let menu = document.querySelector("#menu-button i");
let navbar_list = document.querySelector(".navbar-list");
menu.addEventListener("click", (e) => {
  navbar_list.classList.toggle("navbar-list-active");
});

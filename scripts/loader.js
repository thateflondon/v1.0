var app = document.getElementById("app");
var responsive = document.getElementById("projects-list-home");
var loader = document.getElementById("preloader");

window.onload = function () {
  setTimeout(visible, 3000);
  function visible() {
    app.style.visibility = "visible";
    loader.classList.add("disappear");
    app.classList.add("appear");
  }
};

var app = document.getElementById("app");
var responsive = document.getElementById("projects-list-home");
var loader = document.getElementById("preloader");

window.onload = function () {
  // loader.style.display = "none";
  setTimeout(visible, 3000);
  function visible() {
    app.style.visibility = "visible";
    // loader.style.display = "none";
    loader.classList.add("disappear");
    app.classList.add("appear");
  }
};

// window.addEventListener("load", function () {
//   // app.style.visibility = "hidden";
//   setTimeout(function () {
//     loader.style.display = "none";
//     // window.onload = function () {
//     //   // alert("window loaded");
//     //   app.style.visibility = "visible";
//     // };
//   }, 1000);
// });

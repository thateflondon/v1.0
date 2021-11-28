// var app = document.getElementById("app");
// var responsive = document.getElementById("projects-list-home");
// var loader = document.getElementById("preloader");

// window.onload = function () {
//   setTimeout(visible, 3000);
//   function visible() {
//     app.style.visibility = "visible";
//     loader.classList.add("disappear");
//     app.classList.add("appear");
//   }
// };
// if (sessionStorage.getItem("dontLoad") == null) {
//   alert("This message will be shown only once when we use this window.");
//   sessionStorage.setItem("dontLoad", "true");
// }

$(document).ready(function () {
  function Preloader() {
    var preloader = $(".preloader");
    preloader.show();
    preloader.delay(1000).fadeOut(500);
  }
  if (!sessionStorage.getItem("doNotShow")) {
    sessionStorage.setItem("doNotShow", true);
    Preloader();
  } else {
    $(".preloader").hide();
  }
});

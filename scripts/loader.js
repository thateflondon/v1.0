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
//   if (sessionStorage.getItem("preloadOn") == null) {
//     sessionStorage.setItem("preloadOn", true);
//     visible();
//   }
//   if (document.body.classList.contains("disappear")) {
//     sessionStorage.setItem("preloadOn", false);
//     loader.style.visibility = "hidden";
//   }
// };

// // window.onload = () => {

// // };

// //else if (sessionStorage.getItem("preloadOn") == false )
// // let localData = window.sessionStorage.getItem("preloadOn");

// // if (localData == "true") {
// //   visible();
// // } else if (localData == "false") {
// //   sessionStorage.setItem("preloadOn", "false");
// //   loader.style.visibility = "hidden";
// //   app.classList.add("appear-after-first-load");
// // }
// // if (sessionStorage.getItem("dontLoad") == null) {
// //   alert("This message will be shown only once when we use this window.");
// //   sessionStorage.setItem("dontLoad", "true");
// // }

// // $(document).ready(function () {
// //   function Preloader() {
// //     var preloader = $("#preloader");
// //     preloader.show();
// //     preloader.delay(3000).fadeOut(500);
// //   }
// //   if (!sessionStorage.getItem("doNotShow")) {
// //     sessionStorage.setItem("doNotShow", true);
// //     Preloader();
// //   } else {
// //     $("#preloader").hide();
// //   }
// // });

// // if (window.localStorage.getItem("theme") == null) {
// //   window.localStorage.setItem("theme", "light");
// // }

// // window.addEventListener("load", () => {
// //   const preloader = document.getElementById("preloader");
// //   const app = document.getElementById("app");
// //   preloader.classList.add("preload-done");
// //   setTimeout(visible, 3000);
// //   function visible() {
// //     ok();
// //   }

// //   function ok() {
// //     app.style.visibility = "visible";
// //     // loader.classList.add("disappear");
// //     // app.classList.add("appear");
// //   }
// // });

// // $(window).load(function() {

// //     //Check if user haven't seen loading screen
// //     if (localStorage.getItem('loading-screen') != null) {

// //         //show loading
// //         $('#status').fadeOut();
// //         $('#preloader').delay(350).fadeOut('slow');
// //         $('body').delay(350).css({'overlow':'visible');

// //         //Set info to localStorage that it has been seen
// //         localStorage.setItem('loading-screen', 'seen');
// //     }

// //  });

// document.addEventListener("DOMContentLoaded", function (event) {
//   const pageWrapper = document.getElementById("app");
//   const loadingWrapper = document.getElementById("preloader");

//   const seenAnimation = Cookies.get("seenAnimation");

//   if (!seenAnimation) {
//     // loadingWrapper.style.visibility = "visible";
//     loadingWrapper.style.display = "flex";

//     setTimeout(() => {
//       pageWrapper.style.display = "block";
//     }, 3000);
//     Cookies.set("seenAnimation", 1, { expires: 1 });
//   } else {
//     loadingWrapper.style.visibility = "hidden";
//     pageWrapper.style.display = "block";
//   }
// });

// Cookies.set("eat", "true");

window.addEventListener("DOMContentLoaded", (event) => {
  const pageWrapper = document.getElementById("app");
  const loadingWrapper = document.getElementById("preloader");

  // const seenAnimation = Cookies.get("name", "seenAnimation");
  const seenAnimation = Cookies.get("seenAnimation", "true");

  if (!seenAnimation) {
    // loadingWrapper.style.visibility = "visible";
    loadingWrapper.style.display = "flex";

    setTimeout(() => {
      pageWrapper.style.visibility = "visible";
      pageWrapper.classList.add("appear");
      loadingWrapper.classList.add("disappear");
    }, 3000);
    Cookies.set("seenAnimation", "true", { expires: 1 });
  } else {
    loadingWrapper.style.display = "none";
    pageWrapper.style.visibility = "visible";
  }
});

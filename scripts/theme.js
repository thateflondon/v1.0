// import "../assets/images/moon.png";
// import "../assets/images/sun.png";
// var icon = document.getElementById("icon");

// if (window.localStorage.getItem("theme") == null) {
//   window.localStorage.setItem("theme", "light");
// }

// let localData = window.localStorage.getItem("theme");

// if (localData == "light") {
//   icon.src = "../assets/images/moon.png";
//   document.body.classList.remove("dark-theme");
// } else if (localData == "dark") {
//   icon.src = "../src/images/moon.png";
//   document.body.classList.add("dark-theme");
// }

// icon.onclick = function () {
//   document.body.classList.toggle("dark-theme");
//   if (document.body.classList.contains("dark-theme")) {
//     icon.src = "../assets/images/sun.png";
//     localStorage.setItem("theme", "dark");
//   } else {
//     icon.src = "../assets/images/moon.png";
//     localStorage.setItem("theme", "light");
//   }
// };

// document.getElementById("myImageId").src="newSource.png";

var icon = document.getElementById("icon");

if (window.localStorage.getItem("theme") == null) {
  window.localStorage.setItem("theme", "light");
}

let localData = window.localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "../assets/images/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "../assets/images/moon.png";
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../assets/images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "../assets/images/moon.png";
    localStorage.setItem("theme", "light");
  }
};

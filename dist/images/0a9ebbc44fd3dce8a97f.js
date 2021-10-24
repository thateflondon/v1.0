var icon = document.getElementById("icon");

if (window.localStorage.getItem("theme") == null) {
  window.localStorage.setItem("theme", "light");
}

var localData = window.localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "assets/images/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "assets/images/sun.png";
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "assets/images/moon.png";
    localStorage.setItem("theme", "light");
  }
}; // var icon = document.getElementById("icon");
// var champ = document.getElementById("icon");
// if (sessionStorage.getItem("dark-theme")) {
//   champ.value = sessionStorage.getItem("dark-theme");
// }
// champ.addEventListener("click", function () {
//   sessionStorage.setItem("dark-theme", champ.value);
// });
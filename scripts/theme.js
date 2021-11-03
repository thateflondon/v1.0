// import moonImage from "../assets/images/moon.png";
// import sunImage from "../assets/images/sun.png";

// var moonImg = document.getElementsByClassName("themeBtn");
// moonImg.src = moonImage;

// var sunImg = document.getElementsByClassName("themeBtn");
// sunImg.src = sunImage;

// img.src = moonImage;
// img.src = sunImage;

var icon = document.getElementById("icon");

if (window.localStorage.getItem("theme") == null) {
  window.localStorage.setItem("theme", "light");
}

let localData = window.localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "../dist/images/moon.png";
  // icon.src = moonImage;
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "../dist/images/moon.png";
  // icon.src = moonImage;
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../dist/images/sun.png";
    // icon.src = sunImage;
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "../dist/images/moon.png";
    // icon.src = moonImage;
    localStorage.setItem("theme", "light");
  }
};

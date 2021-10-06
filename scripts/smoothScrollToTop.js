//Smooth Scroll

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".top-button");
  scroll.classList.toggle("active", window.scrollY > 100);
});

function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//function on global scope as webpack don't allow it by default
window.smoothScrollToTop = smoothScrollToTop;

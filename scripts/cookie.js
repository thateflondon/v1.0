// Handle the active class with JS

// Modal handle
let cookieConsent = document.getElementsByClassName("cookie__consent-modal");

// Buttons handle
let cancelCookieBtn = document.getElementsByClassName("button__cancel");
let acceptCookieBtn = document.getElementsByClassName("button__accept");

// Add listener to buttons
cancelCookieBtn.addEventListener("click", function () {
  alert(0);
});

// Set timeout
setTimeout(function () {
  cookieConsent.classList.add("active");
}, 2000);

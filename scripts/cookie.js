// Handle the cookie set with JS

// Cookie modal handle
let cookieConsent = document.querySelector(".cookie__consent-modal");

// Buttons handle
let cancelCookieBtn = document.querySelector(".button__cancel");
let acceptCookieBtn = document.querySelector(".button__accept");

// Add listener to buttons
cancelCookieBtn.addEventListener("click", function () {
  //   alert(0);
  cookieConsent.classList.remove("active");
  localStorage.setItem("cookieApprouved", "no");
  Cookies.set("cookieApprouved", "false", { expires: 1 });
});

acceptCookieBtn.addEventListener("click", function () {
  cookieConsent.classList.remove("active");
  //store the cookie in localStorage
  localStorage.setItem("cookieApprouved", "yes");
  Cookies.set("cookieApprouved", "true", { expires: 1 });
});

// Set timeout
setTimeout(function () {
  //store the cookie in localStorage
  let cookieApprouved = localStorage.getItem("cookieApprouved");
  //manage the active class depending if cookie is set or not
  if (!cookieApprouved) {
    cookieConsent.classList.add("active");
  }
  // if (cookieApprouved == "no") {
  //   cookieConsent.classList.remove("active");
  // }
}, 2000);

var cookieConsent=document.querySelector(".cookie__consent-modal"),cookieSet=document.querySelector("#app"),cancelCookieBtn=document.querySelector(".button__cancel"),acceptCookieBtn=document.querySelector(".button__accept");cancelCookieBtn.addEventListener("click",(function(){cookieConsent.classList.remove("active"),localStorage.setItem("cookieApprouved","no"),Cookies.set("cookieApprouved","false",{expires:1}),cookieSet.classList.remove("unset")})),acceptCookieBtn.addEventListener("click",(function(){cookieConsent.classList.remove("active"),localStorage.setItem("cookieApprouved","yes"),Cookies.set("cookieApprouved","true",{expires:1}),cookieSet.classList.remove("unset")})),setTimeout((function(){localStorage.getItem("cookieApprouved")||(cookieConsent.classList.add("active"),cookieSet.classList.add("unset"))}),2e3);
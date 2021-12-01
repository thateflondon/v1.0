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

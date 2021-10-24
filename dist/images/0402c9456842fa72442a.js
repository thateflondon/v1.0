//Animate the jobs timeline - About
var tabs = document.querySelector(".tabs");
tabs.addEventListener("click", function (e) {
  return handleClick(e);
});

function handleClick(e) {
  var target = e.target;
  var tabNum = target.dataset.tab;
  var activeTab = document.querySelector(".tabs .active");
  var activeContent = document.querySelector(".content .visible");
  var currentContent = document.querySelector(".content__section[data-tab='".concat(tabNum, "']"));

  if (!tabNum) {
    return;
  }

  activeTab.classList.remove("active");
  target.classList.add("active");
  activeContent.classList.remove("visible");
  currentContent.classList.add("visible");
}
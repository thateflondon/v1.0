//Before initializing rolly.js we detect the screen width, to desable rolly.js on medium & small screens

const r = rolly({
  view: document.querySelector(".app"),
  native: true,
  // other options
});
//Detect the width and initialize rolly.js accordingly
if (window.innerWidth > 1024) {
  r.init();
}

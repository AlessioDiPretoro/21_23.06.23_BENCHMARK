const topNavBar = document.querySelector(".navBar");
const topNavBarButton = document.querySelector(".lastButton");

document.addEventListener("scroll", function (e) {
  if (window.scrollY > 363) {
    topNavBar.classList.add("topNavAnimated");
    topNavBarButton.classList.add("topNavButtonAnimated");
  } else {
    topNavBar.classList.remove("topNavAnimated");
    topNavBarButton.classList.remove("topNavButtonAnimated");
  }
});

let animDuration = 0.5;
let animDelay = 0.2;
// const mSvg = document.querySelector(".svg-wrapper __lottie_element_3372");
const mSvg = document.querySelectorAll(`[opacity="1"]`);
let mToAnimate = [];
// console.log("g: ", mSvg);
// mSvg.forEach((e) => {
//   e.style = `animation: svgAnim ${animDuration}s ${animDelay}s infinite;`;
//   animDelay = animDelay + animDuration;
//   console.log("thisE: ", e, "animDelay: ", animDelay);
// });

console.log("mSvg.length", mSvg.length);

// for (let i = 2; i < mSvg.length; i++) {
//   mSvg[i].style = `animation: svgAnim ${animDuration}s ${animDelay}s;`;
//   animDelay = animDuration + animDelay;
//   console.log("thisE: ", mSvg[i]);
// console.log("this style: ", mSvg[i].style);
// }

setInterval(() => {
  let rnd = Math.floor(Math.random() * (mSvg.length - +1));
  mSvg[rnd].style = `animation: svgAnim ${animDuration}s ${animDelay}s;`;
}, animDelay);

// const svg = document.querySelector("svg");
// console.log("svg", svg);

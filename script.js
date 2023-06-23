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

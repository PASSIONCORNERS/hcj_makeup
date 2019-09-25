//click to open menu
// document.getElementById("nav-menuiconz").addEventListener("click", () => {
//   let nav = document.querySelector("#nav-menuiconz");
//   nav.classList.toggle("nav-menuicon-active");
// });

//this function is when user click nav icon it will add a class of
//active to .nav-links AND close to nav-menuicon
const navSlide = () => {
  const burger = document.querySelector(".nav-menuicon");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    burger.classList.toggle("nav-menuicon-bar-close"); //icon
    nav.classList.toggle("nav-menuicon-active"); //menu
  });
};

//run the function to activate
navSlide();

// 2. Jquery change background

$(document).ready(function() {
  $(function() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() > 50) {
        $("#navbar").addClass("header-fixed");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#navbar").removeClass("header-fixed");
      }
    });
  });
});

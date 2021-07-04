window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".header");
  if (window.scrollY > 10) {
    navbarFixed.classList.add("header--sticky");
    //hoặc
    //navbarFixed.style.padding = "20px 15px";
  } else {
    navbarFixed.classList.remove("header--sticky");
    //hoặc
    //navbarFixed.style.padding = "25px 15px";
  }
};

// const toggleSwitch = document.querySelector(
//   '.theme-switch input[type="checkbox"]'
// );
// const currentTheme = localStorage.getItem("theme");

// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);

//   if (currentTheme === "dark") {
//     toggleSwitch.checked = true;
//   }
// }

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light");
//   }
// }

// toggleSwitch.addEventListener("change", switchTheme, false);

//slider
$(document).ready(function () {
  $(".owl-one").owlCarousel();
});

var owl = $(".owl-one");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [3000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

//testimonital
$(document).ready(function () {
  $(".owl-two").owlCarousel();
});

var owl = $(".owl-two");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 10,
  autoplayHoverPause: true,
  responsive : {
    // breakpoint from 0 up
    0 : {
      items: 1,
    },
    // breakpoint from 576 up
    576 : {
      items: 1,
    },
    // breakpoint from 768 up
    768 : {
       items: 2,
    }
}
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [3000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});



// //testimonital-responsive
// $(document).ready(function () {
//   $(".owl-respon").owlCarousel();
// });

// var owl = $(".owl-respon");
// owl.owlCarousel({
//   items: 1,
//   loop: true,
//   margin: 10,
//   autoplayHoverPause: true,
// });
// $(".play").on("click", function () {
//   owl.trigger("play.owl.autoplay", [3000]);
// });
// $(".stop").on("click", function () {
//   owl.trigger("stop.owl.autoplay");
// });



// countup
$(".counter").countUp({
  time: 2000,
  delay: 10,
});

var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
  offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  scrollDuration = 5000;

// (function () {
//   window.__onThemeChange = function () {};
//   function setTheme(newTheme) {
//     window.__theme = newTheme;
//     preferredTheme = newTheme;
//     document.body.setAttribute("data-theme", newTheme);
//     window.__onThemeChange(newTheme);
//   }

//   var preferredTheme;
//   try {
//     preferredTheme = localStorage.getItem("theme");
//   } catch (err) {}

//   window.__setPreferredTheme = function (newTheme) {
//     setTheme(newTheme);
//     try {
//       localStorage.setItem("theme", newTheme);
//     } catch (err) {}
//   };

//   var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
//   darkQuery.addListener(function (e) {
//     window.__setPreferredTheme(e.matches ? "dark" : "light");
//   });

//   setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
// })();

// function onClickChangeTheme(mode = "dark") {
//   window.__setPreferredTheme(mode);
// }

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function changeClose() {
  document.getElementById("icon-expand").style.display = "none";
  document.getElementById("icon-close").style.display = "block";
}

document.getElementById("icon-expand").onclick = changeClose;

function changeExpand() {
  document.getElementById("icon-expand").style.display = "block";
  document.getElementById("icon-close").style.display = "none";
}

document.getElementById("icon-close").onclick = changeExpand;
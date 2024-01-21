// for side nav of home page at mobile ____Start_____
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// for side nav of home page at mobile ____End_____


// for show password of Login page or sign up page ____Start____
function ShowPassword() {
  var x = document.getElementById("Password");
  var y = document.getElementById("Show-pass")
  if (x.type === "password") {
    x.type = "text";
    y.className = "fa-solid fa-eye fa-lg green-color m-r-10 hov-pointer";
  } else {
    x.type = "password";
    y.className = "fa-solid fa-eye-slash fa-lg blue-color m-r-10 hov-pointer";
  }
}
// for show password of Login page or sign up page ____End____


// Show box when scrolling  ____Start____
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 70;

    if (elementTop < innerHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("DOMContentLoaded", reveal);

// Show box when scrolling  ____End____

// show box when page is loading ___Start___
function loadPage() {
  const hidebox = document.querySelectorAll(".hide-box");

  for (var i = 0; i < hidebox.length; i++) {
    hidebox[i].classList.add("active-box");

  };
};
// show box when page is loading ___End___

function Myswiper() {
  const swipers = document.querySelectorAll(".swiper-slide");

  function show(elements) {
    elements = elements.length ? elements : [elements];
    for (let i of elements) {
      i.addEventListener('click', function () {
        i.classList.add('swiper-pagination-bullet-active');
      });
    }
  }
  show(swipers);
};


// Hide and show navbar when Scroll
let prevScrollPos = window.pageYOffset;
let navbar = document.querySelector("nav");

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hide-nav");
  } else {
    navbar.classList.add("hide-nav");
  }

  prevScrollPos = currentScrollPos;
};
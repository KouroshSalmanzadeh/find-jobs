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
// Show box when scrolling  ____End____

// show box when page is loading ___Start___
function loadPage() {
  const hidebox = document.querySelectorAll(".hide-box");

  for (var i = 0; i < hidebox.length; i++) {
    hidebox[i].classList.add("active-box");

  };
};
// show box when page is loading ___End___




// const swiper_main = new Swiper('.swiper_main', {
//   loop: true,                             
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },                
//   navigation: {                       
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
// })

// function swiper() {
//   const swipers = document.querySelectorAll(".swiper-slide");
  
//   for (var i = 0; i < swipers.length; i++) {
//     addEventListener
//       swipers[i].classList.add("swiper-bullet-active");
//     });
//   };
// };


// for side nav of home page at mobile ____Start_____
document.addEventListener('DOMContentLoaded', function() {
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
// for show password of Login page or sign up page ____Start____
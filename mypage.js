function nodisplay() {
  document.getElementById("loginpage").style.display = "none";
}
function sideNav(x) {
  x.classList.toggle("change");
  if (x.classList.contains("change")) {
    document.getElementById("sidebar").style.transform = "initial";
  } else {
    document.getElementById("sidebar").style.transform = "translateX(-100%)";
  }
}

var slideIndex = 1;
slideShow(1);

function plusSlide(n) {
  slideShow((slideIndex += n));
}
function slideShow(n) {
  var slides = document.getElementsByClassName("myslides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
function removeSignup() {
  document.getElementById("signupcontainer").style.display = "none";
}

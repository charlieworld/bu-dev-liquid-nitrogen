import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

document.body.onscroll = function() {scrollEvent()};
document.body.onresize = function() {resizeEvent()};
var menuCloseBtn = document.getElementById("navbarClose");
var menuBtn = document.getElementById("navbarMobileMenu");
var mainLogo = document.getElementById("mainLogo");

var text = document.getElementsByClassName("nav-item");
var menuLink = ['#product', '#application', '#specification', '#about', 'english']

for (var i=0;i<text.length;i++) {
  text[i].addEventListener("click", function(e){
    closeMenu();
  });
}

menuCloseBtn.addEventListener("click", function(e){
  closeMenu();
});

mainLogo.addEventListener("click", function(e){
  closeMenu();
});


menuBtn.addEventListener("click", function(e){
  var menu = document.getElementById("navbarSupportedContent");
  menu.classList.add("show");
  menuBtn.style.display = "none";
});

function closeMenu() {
  var menu = document.getElementById("navbarSupportedContent");
  menu.classList.remove("show");
  menuBtn.style.display = "block";
}

function scrollEvent() {
  var header = document.getElementById("nav_custom");
  

  if (getWindowWidth() < 768) {
    //mobile title
    displayMobileTitle();
  } else {
    console.log('sas' , document.documentElement.scrollTop );
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      displayPc2Title();
      header.classList.add("nav-custom-fixed-top");
    } else {
      console.log('e1');
      displayPc1Title();
      header.classList.remove("nav-custom-fixed-top");
    }
  }
}

function displayMobileTitle() {
  var text = document.getElementsByClassName("nav-item");
  for (var i=0;i<text.length;i++) {
    text[i].classList.remove("nav-text-pc-1");
    text[i].classList.remove("nav-text-pc-2");
    text[i].classList.add("nav-text-moble");
    console.log(`${i} ${text[i].classList}`)
  }
}

function displayPc1Title() {
  var text = document.getElementsByClassName("nav-item");
  for (var i=0;i<text.length;i++) {
    text[i].classList.remove("nav-text-moble");
    text[i].classList.remove("nav-text-pc-2");
    text[i].classList.add("nav-text-pc-1");
    console.log(`${i} ${text[i].classList}`)
  }
}

function displayPc2Title() {
  var text = document.getElementsByClassName("nav-item");
  for (var i=0;i<text.length;i++) {
    text[i].classList.remove("nav-text-moble");
    text[i].classList.remove("nav-text-pc-1");
    text[i].classList.add("nav-text-pc-2");
    console.log(`${i} ${text[i].classList}`)
  }
}

function resizeEvent() {

  if (getWindowWidth() >= 768) {
    menuBtn.style.display = "none";
  } else {
    menuBtn.style.display = "block";
    closeMenu();
  }  
}

function getWindowHeight() {
  return  window.innerHeight;
}

function getWindowWidth() { 
  return  window.innerWidth;
}

function linkNav (link) {
  location.href = link;
  closeMenu();
}

resizeEvent ();
scrollEvent();
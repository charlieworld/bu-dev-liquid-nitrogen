import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

document.body.onscroll = function() {scrollEvent()};
document.body.onresize = function() {resizeEvent()};


function scrollEvent() {
  var header = document.getElementById("nav_custom");
  var text = document.getElementsByClassName("nav-link")

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    header.classList.add("nav-custom-fixed-top");
    for (var i=0;i<text.length;i++) {
      text[i].style.textShadow = "none";
      text[i].style.color = "#333333";
    }
  } else {
    header.classList.remove("nav-custom-fixed-top");
    for (var i=0;i<text.length;i++) {
      text[i].style.textShadow = "0 2px 5px black";
      text[i].style.color = "#FFFFFF";
    }
  }
}

function resizeEvent() {
}

function getWindowHeight() {
  return  window.innerHeight;
}

function getWindowWidth() { 
  return  window.innerWidth;
}



resizeEvent ();
scrollEvent();
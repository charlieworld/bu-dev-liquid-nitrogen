
document.body.onscroll = function() {scrollEvent()};

function scrollEvent() {
  var header = document.getElementById("nav_custom");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    header.classList.add("nav-custom-fixed-top");
  } else {
    header.classList.remove("nav-custom-fixed-top");
  }
}


function resizeEvent () {

}


function getWindowHeight() {
  return  window.innerHeight;
}

function getWindowWidth() { 
  return  window.innerWidth;
}

resizeEvent ();
scrollEvent();
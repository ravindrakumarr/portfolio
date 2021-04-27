function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myTopnav").style.backgroundColor = "#fff";
    document.getElementById("myTopnav a").style.color = "#000";
  
  } else {
    document.getElementById("myTopnav").style.background = "none";
  }
}

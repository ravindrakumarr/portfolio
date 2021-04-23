var i = 0;
function move() {
  if (i == 0) {
    i = 1;

    var elem = document.getElementById("react");
    var elem2 = document.getElementById("angular");
    var elem3 = document.getElementById("laravel");

    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {

      if(elem){
        if (width >= 80) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }

      if(elem2){
        if (width >= 50) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem2.style.width = width + "%";
        }
      }

      if(elem3){
        if (width >= 90) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem3.style.width = width + "%";
        }
      }


    }
  }
}

// window.addEventListener("scroll", (event) => {
//   let scroll = this.scrollY;
//   console.log(scroll)
// });


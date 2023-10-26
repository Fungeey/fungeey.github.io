




var elems = document.body.getElementsByTagName("*");

for(let element of elems){
  element.style.opacity = 0.1;
  element.style.transform="translate(0px, 10px)";
}

let i = 0;
var unfader = setInterval(function () {
  unfade(elems[i]);
  i++;
}, 10);

function unfade(element) {
  var op = 0.1;  // initial opacity

  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.5;
      element.style.transform=`translate(0px, ${(0.8-op)*3}px)`;
  }, 3);
}
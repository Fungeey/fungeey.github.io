




var elems = document.body.getElementsByTagName("*");

for (let element of elems) {
  element.style.opacity = 0.1;
  element.style.transform = "translate(0px, 3px)";
}

let i = 0;
var unfader = setInterval(function () {
  if (!elems[i]){
    clearInterval(unfader);
    return;
  }
  window.scrollTo(0, 0);

  unfade(elems[i++]);
}, 10);

function unfade(element) {
  var op = 0.1;  // initial opacity

  var timer = setInterval(function () {
    if (op >= 1 || !element) {
      element.style.transform = 'none';
      element.style.opacity = 1;
      
      clearInterval(timer);
      return;
    }

    element.style.opacity = op;
    op += op * 0.1;
    element.style.transform = `translate(0px, ${(1 - op) * 3}px)`;
    element.style.transform = 'translateZ(0)';
  }, 10);
}



let aaron = document.body.getElementsByTagName("h1")[0];
console.log(aaron);

let fonts=[
  'Courier New',
  'Lucida Console',
  'Space Mono',
  'Monospace'
]

let font=[
  'Times New Roman',
  'Georgia',
  'Garamond',
  'Arial',
  'Verdana',
  'Helvetica'
]

let j = 0;
let fontSwitcher = setInterval(function () {
  aaron.style.fontFamily = fonts[(++j) % fonts.length];
}, 750);
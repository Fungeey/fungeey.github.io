//let size = 1280;
let w = 1000;
let h = 1000;

let screenX = 1400;
let screenY = 1400;
let nX = screenX/w;
let nY = screenY/h;
let border = 100;
let padX = 200;
let padY = 200;
let offX = nX/2 + padX;
let offY = nY/2 + padY;
let dark, light, bluee, darkBlue, gren, redd;
let terrain;

function setup() {
  createCanvas(1400, 1400);
  background(224, 215, 184);
  noStroke();
  noSmooth();
  noiseDetail(10, 0.4); 
  
  GenerateTerrain();
  InitializeColor();
  
  noLoop();
}

function draw() {
  DrawTerrain();
  //saveCanvas();
}

function InitializeColor(){
  dark = color(55, 47, 24);
  light = color(224, 215, 184);
  bluee = color(121, 164, 181);
  darkBlue = color(49, 87, 102);
  gren = color(126, 183, 121);
  redd = color(181, 121, 121);
}


function GenerateTerrain(){
  terrain = [];
  for (var i = 0; i <= w; i++){
    terrain[i] = [];
    for (var j = 0; j <= h; j++){
      terrain[i][j] = GetNoise(i, j);
    }
  } 

}

function DrawTerrain(){
  for (var i = 1; i < w; i++) {
    for (var j = 1; j < 1000; j++) {
      
      var h = terrain[i][j];

      var c = color(0);
      if(h < 50){
        c = lerpColor(darkBlue, bluee, map(h, 0, 50, 0, 1));
      }else if(h >= 50 && GetMaxHeightDrop(i, j) > 0.25 && h % 10 == 0){
        c = color(dark, h);
      }else if(h < 200){
        c = lerpColor(gren, light, map(h, 0, 200, 0, 1));
      }else{
        c = lerpColor(light, color(255), map(h, 200, 255, 0, 1));
      }
      
      set(i + offX, j + offY, c);
    }
  }
  
  updatePixels();
}

function distSqrt(x1, y1, x2, y2){
  return sqrt(pow(x2-x1, 2) + pow(y2-y1, 2));
}

function GetMaxHeightDrop(x, y){
  var hD = -999999;
  
  var h = terrain[x][y];
  
  for(var i = -1; i <= 1; i++) {
    for(var j = -1; j <= 1; j++) {
      var dy = h - terrain[x + i][ y + j];
      if(dy > 0){
        hD = max(dy, hD);
      }
    }
  }
  
  return hD;
}

function GetNoise(x, y){
  var scl = 0.0045;
  
  var quantize = 1;
  var nois = noise(x*scl, y * scl);
  var expNoise = map(pow(nois, 1.45), 0, 1, 0, 255);
  var quantizedNoise = float(round(expNoise*quantize))/quantize;
  return quantizedNoise;
}
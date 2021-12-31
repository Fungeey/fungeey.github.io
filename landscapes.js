
const size = 1280;
const w = 1000;
const h = 1000;

const screenX = 1400;
const screenY = 1400;
const nX = screenX/w;
const nY = screenY/h;

const border = 100;
const padX = 200;
const padY = 200;
const offX = nX/2 + padX;
const offY = nY/2 + padY;

const distSqrt = (x1, y1, x2, y2) => sqrt(pow(x2-x1, 2) + pow(y2-y1, 2));

const dark = color(55, 47, 24);
const light = color(224, 215, 184);
const blue = color(121, 164, 181);
const darkBlue = color(49, 87, 102);
const green = color(126, 183, 121);
const red = color(181, 121, 121);

const terrain = [];

function setup() {
    createCanvas(1920, 1080);
    background(224, 215, 184);
    noStroke();
    noSmooth();
    noiseDetail(10, 0.4); 

    generateTerrain();
    noLoop();
}

function draw() {
    drawTerrain();
//   saveCanvas();
}


function generateTerrain(){
    terrain = [];
    for (let i = 0; i <= w; i++){
        terrain[i] = [];
        for (let j = 0; j <= h; j++){
            terrain[i][j] = getNoise(i, j);
        }
    }   
}

function drawTerrain(){
    for (let i = 1; i < w; i++) {
        for (let j = 1; j < 1000; j++) {
            let h = terrain[i][j];      
            let c = color(0);
            if(h < 50){
                c = lerpColor(darkBlue, blue, map(h, 0, 50, 0, 1));
            }else if(h >= 50 && GetMaxHeightDrop(i, j) > 0.25 && h % 10 == 0){
                c = color(dark, h);
            }else if(h < 200){
                c = lerpColor(green, light, map(h, 0, 200, 0, 1));
            }else{
                c = lerpColor(light, color(255), map(h, 200, 255, 0, 1));
            }

            set(i + offX, j + offY, c);
        }
    }
  
  updatePixels();
}

function GetMaxHeightDrop(x, y){
    const hD = -999999;
    let h = terrain[x][y];
    
    for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
            let dy = h - terrain[x + i][ y + j];
            if(dy > 0)
                hD = max(dy, hD);
        }
    }
    
    return hD;
}

function getNoise(x, y){
    let scale = 0.0045;

    let quantize = 1;
    let nois = noise(x * scale, y * scale);
    let expNoise = map(pow(nois, 1.45), 0, 1, 0, 255);
    let quantizedNoise = float(round(expNoise*quantize))/quantize;
    return quantizedNoise;
}
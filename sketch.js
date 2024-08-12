let imagem;
let musica;

function setup(){
  createCanvas(1000, 800);
  palavra = miranha();
  musica. loop();
}
function preload(){
  imagem = loadImage("imagem.jpg");
  musica = loadSound("musica.mp3");
}
function draw(){
  background("violet");
  image(imagem,0,0,1000,800);
  batata();
  pizza();
  miranha();
}
function batata(){
  let minimo = 0;
  let maximo =width;
  let seguir = map(mouseX, 0,width, 1,palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,500,400);
}

function pizza(){
  fill("white");
  textSize(60);
  textAlign(CENTER,CENTER);
}

function miranha(){
  let palavras = ["verdinha","amor"];
  return random(palavras);
}
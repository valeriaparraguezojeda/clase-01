var a=50;
var c;

    //cree una variable a que cuando se escribe a en otra parte indica que esa variable a se reemplaza por 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //colorMode(RGB) para escribir comentario
  colorMode(HSB, 160,200,100);
  //background(144, 123, 100);
  //si el background se comenta la elipase se pinta una y otra vez
  /*
  varias
  lineas
  */
  fill(random(0,100),100,100);
  //antes de escribir la variable de color uno pone el random como f(x)
  //llenado de la figura
  noStroke();
  //no linea
  c = a * random (1,6);
  ellipse(mouseX,mouseY,c,c);
    
}

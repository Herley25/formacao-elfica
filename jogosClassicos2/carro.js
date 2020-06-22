//Trabalhando com listas e organizando ainda mais o meu código.

var xCarros = [600, 600, 600, 600, 600, 600];
var yCarros = [50, 96, 150, 210, 270, 318];
var veloCarros = [2, 2.5, 3, 5, 3.5, 2.7];
var compCarro = 40;
var altCarro = 30;


// variáveis referente ao carro 1
//var xCarro = 600;
//var yCarro = 50;
//var veloCarro = 2; // velocidade do carro 

//variáveis referente ao carro 2
//var xCarro2 = 600;
//var yCarro2 = 96;
//var veloCarro2 = 2.5;// velocidade do carro 2

//variáveis referente ao carro 3
//var xCarro3 = 600;
//var yCarro3 = 150;
//var veloCarro3 = 3; // velocidade do carro 3


function carro() {
  for (var i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);
//    image(imagemCarros[i], xCarros[i], yCarros[i], 40, 30);
//    image(imagemCarros[i], xCarros[i], yCarros[i], 40, 30);
  }  
}

function moveCarro() {// deixando o meu código mais organizado utilizando o for 
  for (var i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= veloCarros[i];
    //xCarros[i] -= veloCarros[i];
    //xCarros[i] -= veloCarros[i];
  }  
}

function voltaCarroInicio() {
  for (var i = 0; i < imagemCarros.length; i++){
    if (passouTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  /*
  if (xCarros[1] < -50) {
    xCarros[1] = 600;
  }
  
  if (xCarros[2] < -50) {
    xCarros[2] = 600;
  }
  */
   
  }
}

function passouTela(xCarro) {
  return xCarro < -50;
}





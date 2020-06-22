
//JOGOS CLÁSSICOS PARTE 2, LAÇOS E LISTAS EM JAVASCRIPT.
/*
var imgEstrada; // criando uma variável para a estrada 
var imgAtor; // variável para o jogador 
var imgCarro; // variavel para o carro
*/

// variáveis referente ao carro 
//var xCarro = 600;

// variável referente ao jogador 
//var yAtor = 366;

/*
function preload(){ // função de pré carregamento
  imgEstrada = loadImage("imagens/estrada.png");// carregamento da imagem, passando o endereço onde esta imagem se encontra dentro de "", incluindo a imagem.
  imgAtor = loadImage("imagens/ator-1.png");// carregamento do jogador principal, passando o endereço onde esta imagem se encontra, dentro de "", icluindo a imagem.
  
  imgCarro = loadImage("imagens/carro-1.png");//carregamento da imagem do carro, passando o endereço onde esta imagem se encontra, dentro de "", incluindo a imagem.
}
*/

function setup() {
    createCanvas(500, 400);
    somTrilha.loop(); //para que o som seja execultado sempre no meu jogo.
  }
  
  function draw() {
    background(imgEstrada);// incluindo a imagem da estrada
    jogador();
    carro();
    moveCarro();//chamada da função para o movimento do carro.
    moveJogador();
    voltaCarroInicio();
    verColisao();
    Pontos();
    pontoMarca();
  }
  
  /*
  function jogador() {
    image(imgAtor, 100, yAtor, 25, 25);// mostrar uma imgem, e passar os parâmetros das posições.
  }
  */
  
  /*
  function carro() {
    image(imgCarro, xCarro, 50, 40, 30);
  }
  
  function moveCarro() {
    xCarro -= 2;
  }
  */
  
  /*
  function moveJogador() {
    if (keyIsDown(UP_ARROW)) { // verifica quando as teclas para cima e baixo estão pressionadas, tendo a interação com o teclado.
      yAtor -= 3;
    }
    
    if (keyIsDown(DOWN_ARROW)) { // verifica quando as teclas para cima e baixo estão pressionadas, tendo a interação com o teclado.
      yAtor += 3;
    }
  }
  */
  
  
  
  
  
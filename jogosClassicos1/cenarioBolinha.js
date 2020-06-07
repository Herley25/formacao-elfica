// variaveis para a bolinha nos eixos x, y e para o diametro, ambém o raio 
var xBolinha = 300;
var yBolinha = 200; 
var diametro = 15;
var raio = diametro / 2; // evita que ao colidir a bolinha com a borda ela não ultrapasse a metade.

// variaveis para a velocidade da bolinha 
var velxBolinha = 6; 
var velyBolinha = 6;
var compRaquete = 10;
var altRaquete = 90;

// variáveis para as raquetes, para a criação das mesmas incluindo o seu comprimento e altura.
var raquetex = 5;
var raquetey = 150;

//variáveis do adversário 
var xAdversario = 585; 
var yAdversario = 150;
var veloyAdversario;

var colidiu = false;

//placar do jogo
var meusPontos = 0;
var pontoAdversario = 0;

//variaveis dos sons do jogo
var raquetada;
var ponto;
var trilha;

//variavel erro do Advesário
var erro = 0;

function preload(){ // essa função faz a chamada para os sons do jogo
    trilha = loadSound("trilha.mp3");//loadSound passa o endereço de onde o arquivo se encontra para a variavel.
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
  }

function setup() {

    createCanvas(600, 400);
    trilha.loop();
}

function draw() { // criando a bolinha 

    background(0);
    mostraBolinha(); // refatorando meu código, deixando ele mais enxuto, com crianção de funções. 
    bolinhaMove();   // e fazendo as chamadas das mesmas.
    colisaoBola();
    mostraRaquete(raquetex, raquetey); // fazendo a chamada da minha função.
    moveRaquete(); // chamada da minha função, movimento da raquete.
    mostraRaquete(xAdversario, yAdversario);
    colisaoRaqueteBiblioteca(raquetex, raquetey);
    colisaoRaqueteBiblioteca(xAdversario, yAdversario);
    placar();// chamada da função referente ao placar do jogo
    Ponto();// chamada da função referente aos pontos 
    moveAdversario();
    colisaoRaquete(); // chamada da função, verifica quando a bolinha colide com a raquete.
}
function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function bolinhaMove() {
    xBolinha += velxBolinha;
    yBolinha += velyBolinha;
}

function colisaoBola() {
    if (xBolinha + raio > width || xBolinha - raio < 0) { // este if serve para que quando o movimento da minha bolinha chegar no limite da borda, mudar o sentido do movimento. 
        velxBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {// quando atingir a borda, venha fazer o movimento inverso.
        velyBolinha *= -1;
    }
}

function mostraRaquete(x, y) {
    rect(x, y, compRaquete, altRaquete); 
}

//tenho também outra maneira de mostrar a raquete do adversário sem ter 
//que criar uma outra função e chama-la. posso passar dois 
//parâmetros na minha função que ja está criada, "mostraRaquete".

/*function mostraRaqueteAdversario() {
  rect(xAdversario, yAdversario, compRaquete, altRaquete);
}*/

function moveRaquete() {

    if (keyIsDown(UP_ARROW)) { // esta função serve para usar as teclas para cima e para baixo 
        raquetey -= 10;         // verificando quando elas estão precionadas
    }
    if (keyIsDown(DOWN_ARROW)) {
        raquetey += 10;
    }
}
// esta condição verifica quando a bolinha colide com a raquete, também com a borda em caso de erro 
// ou perca de pontos.
function colisaoRaquete() {
    if (xBolinha - raio < raquetex + compRaquete && yBolinha - raio < raquetey + altRaquete
        && yBolinha + raio > raquetey) { // esta condição verifica quando a bolinha colide com a raquete, e também com a borda em caso de erro ou perda de pontos.
            velxBolinha *= -1;
        }
}

function colisaoRaqueteBiblioteca(x, y){
    colidiu = collideRectCircle(x, y, compRaquete, altRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        veloxBolinha *= -1;
        raquetada.play();
    }
}

// o contato da bolinha na raquete do adversário também poderia fazer desta forma usando uma outra função
//para melhorar ainda mais o meu código pode-se fazer em apenas uma função para a bolinha colidir em ambas
//as raquetes, passando parêmetros para a mesma.
/*function colisaoRaqueteBiblioteca() {
  colidiu = collideRectCircle (xAdversario, yAdversario , compRaquete , altRaquete , xBolinha , yBolinha , raio );
  if (colidiu) {
    veloxBolinha *= -1;
  }
}*/

function moveAdversario() {
    veloyAdversario = yBolinha - yAdversario - compRaquete / 2 -30;
    yAdversario += veloyAdversario + erro;
    chancedeErro();// chamada da minha função para margem de erro do Adversario.
  }

  function chancedeErro(){// função para a margem de erro do Adversario, atribuindo uma condição.
    if (pontoAdversario >= meusPontos){
      erro += 1;
      if (erro >= 39){
        erro = 40;
      }
    } else {
        erro -= 1;
        if (erro <= 35){
          erro = 35;
        }
      }
  }

  function placar(){
    stroke(255);//contorno ao redor do placar ou borda 
    textAlign(CENTER);// serve para alinhar o placar ao meio 
    textSize(16); //serve para almentar o número do placar 
    fill(color(0,191,255));
    rect(150, 10, 40, 20);
    fill(255);// preenche com a cor branca.
    text(meusPontos, 170, 26);// função "text" posso mostrar o que quero exibir
    fill(color(0,191,255));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontoAdversario, 470, 26);
  }

  function Ponto(){
    if (xBolinha > 590){
      meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 10){
      pontoAdversario += 1;
      ponto.play();
    }
  }
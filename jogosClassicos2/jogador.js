// variável referente ao jogador 
var xAtor = 87;
var yAtor = 368;
var colisao = false;

//variável referente aos pontos do jogo
var meusPontos = 0;


function jogador() {
  image(imgAtor, xAtor, yAtor, 25, 25);// mostrar uma imgem, e passar os parâmetros das posições.
}


function moveJogador() {
  if (keyIsDown(UP_ARROW)) { // verifica quando as teclas para cima e baixo estão pressionadas, tendo a interação com o teclado.
    yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)) { // verifica quando as teclas para cima e baixo estão pressionadas, tendo a interação com o teclado.
    if (podeMover()){ // impede que o meu jogador ultrapasse o limite da minha tela, ao precionar a seta para baixo.
      yAtor += 3;
    }
  }
}

function verColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter) soluções de outras pessoas, acima são coordenadas para serem seguidas.
  for (var i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtorPosicaoInicial();
      somColisao.play();
      if (pontoMaiorZero()) {
        meusPontos -= 1;
      }
    }
  } 
  
}

function voltaAtorPosicaoInicial() {
  yAtor = 368;
}

function Pontos(){
  fill(color(0, 255, 255))// incluindo a cor do ponto
  textSize(30);// alterar o tamanho do ponto
  text(meusPontos, width / 5, 29);// dividindo o comprimento da tela em 5 partes, o valor 60 é referente ao eixo y da minha tela .
  textAlign(CENTER);
}

function pontoMarca(){
   if (yAtor < 13) {
     meusPontos++;
     voltaAtorPosicaoInicial();
     somPonto.play();
   } 
}

function pontoMaiorZero(){
  return meusPontos > 0  //verifica se a condição é verdadeiro ou falso, esse return serve para retornar este valor.
}

function podeMover() {//// impede que o meu jogador ultrapasse o limite da minha tela, ao precionar a seta para baixo.
  return yAtor < 368;
}




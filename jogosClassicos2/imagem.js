// organizando o meu código, usando outro arquivo e chamando o mesmo no html.

var imgEstrada; // criando uma variável para a estrada 
var imgAtor; // variável para o jogador 
var imgCarro; // variavel para o carro

//variável referente ao som do jogo
var somTrilha;
var somColisao;
var somPonto;

function preload(){ // função de pré carregamento
  imgEstrada = loadImage("imagens/estrada.png");// carregamento da imagem, passando o endereço onde esta imagem se encontra dentro de "", incluindo a imagem.
  imgAtor = loadImage("imagens/ator-1.png");// carregamento do jogador principal, passando o endereço onde esta imagem se encontra, dentro de "", icluindo a imagem.
  
  imgCarro = loadImage("imagens/carro-1.png");//carregamento da imagem do carro, passando o endereço onde esta imagem se encontra, dentro de "", incluindo a imagem.
  
  imgCarro2 = loadImage("imagens/carro-2.png");//carregamento da imagem do carro, passando o endereço onde esta imagem se encontra, dentro de "", incluindo a imagem.
  
  imgCarro3 = loadImage("imagens/carro-3.png");//carregamento da imagem do carro, passando o endereço onde esta imagem se encontra, dentro de "", incluindo a imagem.
  
  imagemCarros = [imgCarro, imgCarro2, imgCarro3, imgCarro, imgCarro2, imgCarro3];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}


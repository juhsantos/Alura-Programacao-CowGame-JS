//código ator ator
let xAtor = 85;
let yAtor = 366;
let colisao = false
let meusPontos = 0;



function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);

}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeMover()){
    yAtor += 3;
    }
  }
}

function verifcaColisao (){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      atorVoltaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorZero()){
      meusPontos -=1;
        }
      }
    }
  }
  
  function atorVoltaPosicaoInicial(){
    yAtor = 366;
  }


function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    somDoPonto.play();
    meusPontos += 1;
    atorVoltaPosicaoInicial();
  }
}

function pontosMaiorZero (){
  return meusPontos > 0
}

function podeMover(){
  return yAtor < 366;
}
let ordemMaquina = [];
let ordemJogador = [];
let luzes;
let turno=0;
let contadorRodadas=1;
let validar;
let compararTurno;
let intervalId;
let count
let recorde=0;
let tentativas;
let feedbackUsuario;
let sequenciaErros=0;
let tentativasRestantes=3;
let derrota;
let vitoria;
function criarBotoes() {
  let containerGame=document.createElement('main');
  containerGame.classList.add('containerGame');
  document.querySelector('#body').appendChild(containerGame);
  let game = document.createElement('div');
  game.classList.add('game');
  document.querySelector('.containerGame').appendChild(game);
  let btnverde = document.createElement('span');
  btnverde.classList.add('btnTopEsquerdo');
  document.querySelector('.game').appendChild(btnverde);
  let btnazul = document.createElement('span');
  btnazul.classList.add('btnTopDireito');
  document.querySelector('.game').appendChild(btnazul);
  let btnvermelho = document.createElement('span');
  btnvermelho.classList.add('btnBottomEsquerdo');
  document.querySelector('.game').appendChild(btnvermelho);
  let btnamarelo = document.createElement('span');
  btnamarelo.classList.add('btnBottomDireito');
  document.querySelector('.game').appendChild(btnamarelo);
   let containerBotoes = document.createElement('div');
   containerBotoes.classList.add('botoes');
  document.querySelector('.game').appendChild(containerBotoes);
 tentativas=document.createElement('p');
 tentativas.classList.add('tentativas');
 document.querySelector('.botoes').appendChild(tentativas);
 tentativas.innerHTML="tentativas Restantes:"+tentativasRestantes;
  let display = document.createElement('div');
  display.classList.add('display');
  document.querySelector('.botoes').appendChild(display);
  let divCount = document.createElement('div');
  divCount.classList.add('count');
   document.querySelector('.display').appendChild(divCount);
  placar = document.createElement('p');
  placar.classList.add('pCount');
  document.querySelector('.count').appendChild(placar);
  feedbackUsuario = document.createElement('p');
  feedbackUsuario.classList.add('msgUsuario');
  document.querySelector('.botoes').appendChild(feedbackUsuario);
  feedbackUsuario.innerText = "Start para começar";
  let btnStart = document.createElement('button');
  btnStart.classList.add('start');
   document.querySelector('.botoes').appendChild(btnStart);
  btnStart.innerText = "Start";
  btnStart.addEventListener('click', jogar);
  let btnReset = document.createElement('button');
   btnReset.classList.add('reset');
  document.querySelector('.botoes').appendChild(btnReset);
  btnReset.innerText = "Reiniciar";
  btnReset.addEventListener('click', reiniciar);
}
criarBotoes();
const azul = document.querySelector('.btnBottomDireito');
const verde = document.querySelector('.btnTopEsquerdo');
const vermelho = document.querySelector('.btnBottomEsquerdo');
const amarelo = document.querySelector('.btnTopDireito');
function reiniciar(){
   recorde=0;
 tentativasRestantes=3;
 tentativas.innerHTML="tentativas Restantes:"+tentativasRestantes;
    ordemMaquina = [];
    ordemJogador= [];
   luzes = 0;
    intervalId = 0;
    turno = 1;
  feedbackUsuario.innerHTML = "seja bem-vindo";
  validar = true;
  placar.innerHTML = contadorRodadas;
    for (let i = 0; i < 15; i++) {
      ordemMaquina.push(Math.floor(Math.random() * 4) + 1);
    }
    compararTurno = true;
    intervalId = setInterval(turnoJogo, 1000);
  }
function jogar() {
  ordemMaquina = [];
  ordemJogador= [];
 luzes = 0;
  intervalId = 0;
  turno = 1;
feedbackUsuario.innerHTML = "seja bem-vindo";
validar = true;
placar.innerHTML = contadorRodadas;
  for (let i = 0; i < 15; i++) {
    ordemMaquina.push(Math.floor(Math.random() * 4) + 1);
  }
  compararTurno = true;
  intervalId = setInterval(turnoJogo, 1000);
}
function turnoJogo() {
  if (luzes == turno) {
    clearInterval(intervalId);
    compararTurno = false;
    coresEscuras();
  }
  if (compararTurno) {
    coresEscuras();
    setTimeout(() => {
      console.log(ordemMaquina[luzes]);
      if (ordemMaquina[luzes] == 1) {
       btnverde();
      }
      else if (ordemMaquina[luzes] == 2) {
        btnvermelho();
       }
       else if (ordemMaquina[luzes] == 3) {
        btnamarelo();
       } else if (ordemMaquina[luzes] == 4) {
           btnazul();
       }
      luzes++;
    }, 200);
  }
}
function btnverde() {
  verde.style.backgroundColor= "#13FF7C";
}
function btnvermelho() {
  vermelho.style.backgroundColor = "#FF4C4C";
}
function btnamarelo() {
  amarelo.style.backgroundColor = "#FED93F";
}
function btnazul() {
 azul.style.backgroundColor = "#1C8CFF";
}
function coresBrilhantes() {
  amarelo.style.backgroundColor = "#FED93F";
  azul.style.backgroundColor = "#1C8CFF";
  vermelho.style.backgroundColor = "#FF4C4C";
  verde.style.backgroundColor= "#13FF7C";
}
function coresEscuras() {
  amarelo.style.backgroundColor = "#CCA707";
  azul.style.backgroundColor = "#094A8F";
 vermelho.style.backgroundColor = "#9F0F17";
  verde.style.backgroundColor = "#00A74A";
}
verde.addEventListener('click', (event) => {
    ordemJogador.push(1);
    checarOrdem();
    btnverde();
    if(!vitoria) {
      setTimeout(() => {
        coresEscuras();
      }, 300);
    }
})
vermelho.addEventListener('click', (event) => {
    ordemJogador.push(2);
    checarOrdem();
    btnvermelho();
    if(!vitoria) {
      setTimeout(() => {
        coresEscuras();
      }, 300);
    }
})
amarelo.addEventListener('click', (event) => {
    ordemJogador.push(3);
    checarOrdem();
    btnamarelo();
    if(!vitoria) {
      setTimeout(() => {
        coresEscuras();
      }, 300);
    }
})
azul.addEventListener('click', (event) => {
   ordemJogador.push(4);
   checarOrdem();
    btnazul();
    if(!vitoria) {
      setTimeout(() => {
        coresEscuras();
      }, 300);
    }
})
function checarOrdem() {
 if (ordemJogador[ordemJogador.length-1] !== ordemMaquina[ordemJogador.length - 1])
  validar= false;
    if ( ordemJogador.length == 15 && validar) {
      vitoria=true;
      feedbackUsuario.innerHTML="Parabéns vc venceu";
      setInterval(coresBrilhantes(), 2000);
            }
  if (validar== false) {
    coresBrilhantes();
    feedbackUsuario.innerHTML = "vc errou!";
      if(tentativasRestantes <=1 ){
       derrota=true;
      feedbackUsuario.innerHTML="Game over!";
      tentativasRestantes=0
      tentativas.innerHTML="tentativas Restantes:"+tentativasRestantes;
      placar.innerHTML="";
      setTimeout(()=>{
        feedbackUsuario.innerHTML="Seu recorde foi: "+recorde;
               setTimeout(()=>{
                   feedbackUsuario.innerHTML="Pressione Reiniciar";
               },3000)
      },4000)
               setInterval(coresBrilhantes(), 2000);
           } else{
    setTimeout(() => {
          tentativasRestantes--;
      feedbackUsuario.innerHTML = "Tente Novamente!";
      coresEscuras();
      tentativas.innerHTML="tentativas Restantes:"+tentativasRestantes;
        compararTurno= true;
        luzes = 0;
      ordemJogador = [];
        validar = true;
        intervalId = setInterval(turnoJogo, 800);
    }, 800);
   }
}
  if (turno == ordemJogador.length && validar && !vitoria) {
    turno++;
   ordemJogador = [];
    compararTurno= true;
   luzes = 0;
    placar.innerHTML = turno;
    feedbackUsuario.innerHTML = "Parabéns!";
             recorde++;
    intervalId = setInterval(turnoJogo, 1000);
    }
}
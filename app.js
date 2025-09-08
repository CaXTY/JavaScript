let listaDeNumerosSorteados = []; // lista para armazenar os números já sorteados
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR"; // Português do Brasil
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("A síntese de voz não é suportada neste navegador.");
  }
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Digite um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
          exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
        } else {
          exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeMaximaDeNumeros = listaDeNumerosSorteados.length;

  if(quantidadeMaximaDeNumeros == numeroLimite) { // se já sorteou todos os números possíveis, reseta a lista
    listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido); // adiciona o número à lista
    console.log(listaDeNumerosSorteados); // para depuração
    return numeroEscolhido;
  }
}

function limparCampo() {
  document.querySelector('input').value = ''; // limpa o campo
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  exibirMensagemInicial();
  limparCampo();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
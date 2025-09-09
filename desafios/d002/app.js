// Solicita ao usuário qual é o seu nome
let nomeUsuario = prompt("Qual é o seu nome?")

// Solicita ao usuário qual é o dia da semana
let diaDaSemana = prompt(`Olá ${nomeUsuario}! Qual é o dia da semana?`);

//Converte para minúsculas e remove acentos para melhor comparação
let diaNormalizado = diaDaSemana.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "");


if (diaNormalizado === "sábado" || diaNormalizado === "domingo") {
    alert(`Bom fim de semana, ${nomeUsuario}!`);
} else {
    alert(`Boa semana, ${nomeUsuario}!`);
}
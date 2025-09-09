alert ("Boas vindas ao nosso site!")
let nome = "lua"
alert("Prazer em te conhecer, " + nome + "!")

let idade = 25
alert("Você tem " + idade + " anos.")

let numeroDeVendas = 50
alert("Você fez " + numeroDeVendas + " vendas.")

let saldoDisponivel = 1000
alert("Seu saldo disponível é de " + saldoDisponivel + ".")

let mensagemDeErro = "ERRO! Preencha todos os campos corretamente."
alert(mensagemDeErro)

let nomeUsuario = prompt("Qual é o seu nome?")
let idadeUsuario = prompt("Qual é a sua idade?")

if (idadeUsuario >= 18) {
  alert("Você é maior de idade. Já pode tirar sua carteira de motorista.")
} else {
  alert("Você é menor de idade. Infelizmente, ainda não pode tirar sua carteira de motorista.")
}
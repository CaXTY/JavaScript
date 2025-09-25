var agora = new Date() //cria um objeto data com a data e hora atual do sistema
var hora = agora.getHours() //pega a hora atual do sistema
//var hora = 10;
//var hora = 15;
//var hora = 22;
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
    console.log("Até amanhã!");
}

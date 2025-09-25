var idade = 15;
    console.log(`Você tem ${idade} anos.`);
if (idade < 18) {
    console.log("Não pode votar.");
} else if (idade < 18 || idade > 65) {
    console.log("O voto é opcional.");
} else {
    console.log("O seu voto é obrigatório.");
}


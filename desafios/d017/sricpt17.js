let idade = prompt("Por favor, insira sua idade: ");

idade = Number(idade); //Converte a entrada para numero (o prompt retorna uma string)

//VERIFICAR SE A IDADE E VALIDA
if (!isNaN(idade) && idade >= 0) {
    //VERIFICAR SE E MAIOR OU MENOR DE IDADE
    if (idade >= 18) {
        console.log(`Você tem ${idade} anos. Você é maior de idade. `);
    } else {
        console.log(`Você tem ${idade} anos. Vocé é menor de idade. `);
    } 
} else {
        console.log("Por favor, insira uma idade válida.")
} 

 

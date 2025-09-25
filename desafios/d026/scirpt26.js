function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 5.32;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

//Exemplo de uso
let valorEmDolar = 30;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`)
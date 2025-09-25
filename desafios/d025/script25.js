function calcularSalaCircular(raio) {
    /**
     * Calcula e mostra a area e o perímetro de uma sala circular.
     * 
     * @param {number} raio - O raio da sala circular em metros
     */

    const pi = 3.14;

    //Cálculos 
    const area = pi * Math.pow(raio, 2);
    const perimetro = 2 * pi * raio;

    console.log(`Sala circular - Raio: ${raio}m`);
    console.log("=".repeat(30));
    console.log(`Área: ${area.toFixed(2)}m²`);
    console.log(`Perímertro: ${perimetro.toFixed(2)}m`);
}

//Exemplo de uso:
calcularSalaCircular(3.5);
function calcularAreaPerimetro(altura, largura) {
   /**
    * Calcula e exibe a area e o perimetro de uma sala retangular
    * @param {number} altura - Altura da sala em metros
    * @param {number} largura - Largura da sala  em metros
    */

   //CALCULOS 
   /**
    * Area = altura x largura
    * perimetro = 2 x (altura + largura)
    */
   
   const area = altura * largura
   const perimetro = 2 * (altura + largura)

   //Exibição dos resultados
   console.log("=== DIMENSÕES DA SALA ===");
   console.log(`Altura: ${altura} m`);
   console.log(`Largura: ${largura} m`);
   console.log(`Área: ${area.toFixed(2)} m²`); //formata numeros com 2 casas decimais
   console.log(`Perimetro: ${perimetro.toFixed(2)} m`);
}

//Exemplos de uso:
console.log("Exemplo 1: ");
calcularAreaPerimetro(3.0, 4.0);

console.log("\n" + "=".repeat(30) + "\n");

console.log("Exemplo 2: ");
calcularAreaPerimetro(2.5, 5.0);

console.log("\n" + "=".repeat(30) + "\n");
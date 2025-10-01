function calcularIMC(peso, altura)  {

   // Validações
   if (peso <= 0 || altura <= 0) {
    return 'Peso e altura devem ser valores positivos';
   }

   //Calculo
   const imc = peso / (altura * altura);
   const imcArredondado = Math.round(imc * 100) / 100;

   //Classificao
   let classificacao = '';

   if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
   } else if (imc < 25 ) {
    classificacao = 'Peso normal';
   } else if (imc < 30 ) {
    classificacao = 'Sobrepeso';
   } else if (imc < 35) {
    classificacao = 'Obesidade grau I';
   } else if (imc < 40) {
    classificacao = 'Obesidade grau II';
   } else {
    classificacao = 'Obesidade grau III';
   }
   
   return {
    imc: imcArredondado,
    classificacao: classificacao
   };
}

console.log(calcularIMC(70, 1.70));

console.log(calcularIMC(90, 1.70));

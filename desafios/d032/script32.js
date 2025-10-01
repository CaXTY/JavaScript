function fatorial(numero) {
   if (numero < 0) return undefined; // fatorial de numero negativo n existe
   if (numero === 0 || numero === 1) return 1;

   let resultado = 1;
   for (let i = 2; i <= numero; i++) {
      resultado *= i;
   }
   
   return resultado;
}

//Testando a função
console.log(fatorial(0));
console.log(fatorial(1)); 
console.log(fatorial(5));

//Testando casos especias
console.log(fatorial(-1));
console.log(fatorial(3.5));
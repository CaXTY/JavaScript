let linguagensDeProgramacao = ['JavaScript', 'Phyton', 'C++', 'C', 'C#'];

//Adicionando no final
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('PHP');


//Adicionando no inicio
linguagensDeProgramacao.unshift('TypeScript');


console.log("Lista de linguagens de Programação: ");
for (let i = 0; i < linguagensDeProgramacao.length; i++) {
   console.log(`${i + 1}. ${linguagensDeProgramacao[i]}`);
}
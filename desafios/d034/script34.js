//Criando lista vazia
let listaGenerica = [];

//Função para adicionar elementos
function adicionarElemento(elemento) {
   listaGenerica.push(elemento);
   console.log(`Elemento "${elemento}" adicionado. Lista:`, listaGenerica);
}

//Adicionando elementos
adicionarElemento("Primeiro");
adicionarElemento(123);
adicionarElemento({nome: "Carlos"});

//Verificando propriedades
console.log("Tamanho da lista:",listaGenerica.length);
console.log("É um array?", Array.isArray(listaGenerica));
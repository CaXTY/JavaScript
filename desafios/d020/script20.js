/*let nota = 7.5;

if (nota >=7) {
    console.log(`Nota ${nota}: APROVADO! `);
} else if (nota >= 5) {
    console.log(`Nota ${nota}: RECUPERAÇÃO. ESTUDE UM POUCO MAIS!`);
} else {
    console.log(`Nota ${nota}: REPROVADO.`)
} */

let nota = prompt("Digite a sua nota: ")
nota = Number(nota);

//VERIFICAR SE A NOTA É VÁLIDA
if (!isNaN(nota) && nota >= 0 && nota <=10) {
    if (nota >= 7) {
        console.log(`Nota ${nota}: APROVADO! ✅ `)
    } else if (nota >= 5) {
        console.log(`Nota ${nota}: RECUPERAÇÃO! ⚠️ `)
    } else {
        console.log(`Nota ${nota}: REPROVADO! ❌ `)
    }
} else {
    console.log("‼️ Por favor, digite uma nota válida entre 0 e 10!")
}
let numero = prompt("Por favor, insira um número : ")

numero = Number(numero);

if (!isNaN(numero)) {
    
    if (numero > 0) {
        console.log(`O númeroo ${numero} é POSITIVO ✅. `);
    } else if (numero < 0) {
        console.log(`O número ${numero} é NEGATIVO 🔻. `);
    } else {
        console.log(`O número é zero ⚪.`)
    }
} else {
    console.log(" ❌ Por favor, insira um número válido.")
}


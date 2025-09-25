/*
//VERSAO BASICA
function encontrarMaior(a, b) {
    if (a > b){
        return a;
    } else {
        return b;
    }
}

//Exemplos de uso
console.log(encontrarMaior(100, 101));
console.log(encontrarMaior(50, 52));
console.log(encontrarMaior(7, 7));
*/


//VERSAO COM MATH.MAX()
function encontrarMaior(a, b) {
    return Math.max(a, b);
}

console.log(encontrarMaior(10, 12));
console.log(encontrarMaior(-3, -6));
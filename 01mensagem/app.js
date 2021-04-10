//Importar arquivos de calculos
const calculos = require('./calculos');

//obter a função multiplicar
const multiplicar = calculos.multiplicar;

//Realizar o calculo da multiplicação
console.log(multiplicar(5,6));

// Obter a função somar
const somar = calculos.somar;

//Realizar o calculo da soma
console.log(somar(10,5));

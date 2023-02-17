// const Calculadora = require("./calculadora");
const CalculadoraCientifica = require("./calculadora_cientifica");

const funciones = require("./funciones");
const colors = require('colors');

// let calculadora = new Calculadora();
let calculadoraCientifica = new CalculadoraCientifica();


console.log("Inicio el servidor correctamente");
console.log("Hola mi nombres es Superman");


console.log(calculadoraCientifica.sumar(5,6), "Calculadora sumar");
console.log(calculadoraCientifica.restar(13,6), "Calculadora restar".bgGreen);
console.log(calculadoraCientifica.multiplicar(5,5), "Calculadora multiplicar");
console.log(calculadoraCientifica.dividir(50,5), "Calculadora dividir");


console.log(calculadoraCientifica.potencia(5,5), "Calculadora Científica Potencia");
console.log(calculadoraCientifica.raizCuadrada(25), "Calculadora Científica Raíz");

console.log(funciones.saluda().bgYellow);
console.log(funciones.despedida().rainbow);
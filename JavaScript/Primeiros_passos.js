//Aula 1
/*
//Imprimir

console.log('Print algo');

//Variáveis

let variavel = 10;
const pi = 3.14;

variavel = 20;

console.log(variavel);

//Operadores
//Atribuição = 
let num1 = 5;
let num2 = 8;
let num3 = 32;

// Aritméticos + - * / 
let soma = num1 + num2;
let diferenca = num2 - num1;
let produto = num1 * num2;
let quociente = num3 / num2;

console.log(soma);
console.log(diferenca);
console.log(produto);
console.log(quociente);
*/

/*Desafio
Faça um programa para calcular o valor gasto de combustível em uma viagem.
Você terá 3 variáveis.
1 - Preço do combustível;
2 - Valor médio gasto do carro;
3 - Distância em km da viagem.

Imprima no console o valor que será gasto de combustível para realizar essa viagem. */
let precoCombustivel = 4.85;
let consumoMedio = 12;
let distanciaViagem = 350;

let valorGasto = (precoCombustivel * distanciaViagem) / consumoMedio;
console.log(
    'O valor provável do gasto da viagem será: R$' + valorGasto.toFixed(2)
);

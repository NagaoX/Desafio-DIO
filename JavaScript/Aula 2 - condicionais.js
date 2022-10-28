//Condicionais
//True ou false

/*
const camisetaRenanAzul = true;
const camisetaLemaoAzul = false;

const numero = 10;


// % atribui o resto da divisão
// == compara se é igual, mas ignora o tipo
// === compara se é estritamente igual, incluindo o tipo


const isNumeroPar = numero % 2 === 0;

// if (true) executa o código dentro do {}

if (isNumeroPar) {
    console.log('O número é par');
}

//! operador de negação lógica
if (!isNumeroPar) {
    console.log('O número é ímpar');
}

// outra maneira de fazer
if (isNumeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}

// Caso do zero
const numeroX = 0;
const numeroDivisivelPor5 = numeroX % 5 === 0;

if (numeroX === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('O número divisível por 5');
} else {
    console.log('O número não é divisível por 5');
}
*/

/*
/*Desafio
Faça um programa para calcular o valor gasto de combustível em uma viagem.
Você terá 5 variáveis.
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do seu carro por km (km/L);
5 - Distância em km da viagem.

Imprima no console o valor que será gasto de combustível para realizar essa viagem.
*/

let precoEtanol = 3.5;
let precoGasolina = 4.8;
let distanciaViagem = 400;
let consumoMedioEtanol = 8;
let consumoMedioGasolina = 12;

// Responda tipoCombustivel com 'Gasolina' ou 'Etanol'
let tipoCombustivel = 'Etanol';

if (tipoCombustivel === 'Etanol') {
    let valorGasto = (precoEtanol * distanciaViagem) / consumoMedioEtanol;
    console.log(
        'O valor provável do gasto da viagem com etanol será: R$' +
            valorGasto.toFixed(2)
    );
} else if (tipoCombustivel === 'Gasolina') {
    let valorGasto = (precoGasolina * distanciaViagem) / consumoMedioGasolina;
    console.log(
        'O valor provável do gasto da viagem com gasolina será: R$' +
            valorGasto.toFixed(2)
    );
}

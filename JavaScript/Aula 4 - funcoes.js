//Aula 4 - funções

function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Satoshi');

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

//Deixar os códigos auxiliares fora da função main
//Colocar código principal dentro da function main

//Faça essa melhoria no desafio do IMC

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
    if (imc > 40) {
        return 'Obesidade grave';
    } else if (imc >= 30) {
        return 'Obeso';
    } else if (imc >= 25) {
        return 'Acima do peso';
    } else if (imc >= 18.5) {
        return 'Peso normal';
    } else {
        return 'Abaixo do peso';
    }
}

function main() {
    const altura = 1.8;
    const peso = 80;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
}

main();

//IIFE (Immediately Invoked Function Expression)
// Função que não precisa ser nomeada e é imediatamente invocada. Exemplo de função que calcula o dobro:
(function (numero) {
    numero = 5;
    console.log(2 * numero);
})();

//Desafios
//Escreva uma função que imprima seu nome:
function SeuNome(name) {
    return 'Seu nome é ' + name;
}

console.log(SeuNome('Harry'));

//Escreva uma função que verifique se você é maior de idade

function isMaiorDeIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você ainda não é maior de idade.');
    }
}

isMaiorDeIdade(20);
isMaiorDeIdade(18);
isMaiorDeIdade(15);

//Escreva o exercício do valor do produto em funções:
/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

//Escolha a forma de pagamento:
// 1 - Debito
// 2 - Dinheiro
// 3 - Pix
// 4 - Parcelado em 2x
// 5 - Parcelado acima de 2x

function aplicarDesconto(valor, desconto) {
    return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
    return valor + valor * (juros / 100);
}

function valorAPagar(precoEtiqueta, formaPagamento) {
    if (formaPagamento === 1) {
        console.log(
            'O valor a pagar é R$' + aplicarDesconto(precoEtiqueta, 10)
        );
    } else if (formaPagamento === 2 || formaPagamento === 3) {
        console.log(
            'O valor a pagar é R$' + aplicarDesconto(precoEtiqueta, 15)
        );
    } else if (formaPagamento === 4) {
        console.log('O valor a pagar é R$' + precoEtiqueta);
    } else if (formaPagamento === 5) {
        console.log(
            'O valor a pagar é R$' + aplicarJuros(precoEtiqueta, 10).toFixed(2)
        );
    } else {
        console.log('Forma de pagamento inválida.');
    }
}

valorAPagar(100, 4);

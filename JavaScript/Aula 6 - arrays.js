//Arrays e estruturas de repetição
/*
const alunos = ['Joao', 'Vitor', 'Marina'];

//item da lista inicia em 0
console.log(alunos[0]);

//adicionar no final da lista
alunos.push("Renan");
console.log(alunos);

//substitiu a posição [3]
alunos[3] = 'Vinicius';
console.log(alunos);

//pode ter itens de vários tipos
alunos.push(10);
console.log(alunos);

//remover o último da lista
alunos.pop();
console.log(alunos);

//remover o primeiro da lista
alunos.shift();
console.log(alunos);
*/

/*
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
let soma = 0;

//como somar todas as notas e obter a média?
//for percorre uma quantidade definida de vezes
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

const media = soma / notas.length;
console.log(media);
*/

//Desafio 1) Crie um programa que dado seu um número imprima sua tabuada

const numeroDado = 7;
console.log(`\nTabuada do ${numeroDado}: \n`);

for (let i = 1; i <= 10; i++) {
    let produto = i * numeroDado;
    console.log(`${i} x ${numeroDado} = ${produto}`);
}

//Desafio 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Números pares:');
for (let i = 0; i < lista.length; i++) {
    isPar = lista[i] % 2 === 0;
    if (isPar) {
        console.log(lista[i]);
    }
}

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
const nomes = ['Satoshi', 'Viscerys', 'Voldemort'];

console.log('Nomes que começam com a letra V:');
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].charAt(0) === 'V') {
        console.log(nomes[i]);
    }
}

//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//Ex de lista = [2, 7, 3, 8, 10, 4]

//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//Ex de lista de notas = [2, 7, 3, 8, 10, 4]

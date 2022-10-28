//Objetos
//Coleção dinâmica de chave e valor

/*
const vitor = {
    nome: "Vitor J Guerra",
    idade: 25

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(vitor.nome);
console.log(vitor.idade);
console.log(vitor);

vitor.altura = 1.69;
console.log(vitor);

delete vitor.nome;
console.log(vitor);
*/

/*
const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    },
};

pessoa.nome = 'Renan';
pessoa.idade = 30;
pessoa.descrever();

const atributo = 'idade';
console.log(pessoa[atributo]);

pessoa['nome'] = 'teste';
*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

/*
const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

console.log(vitor);
console.log(renan);

vitor.descrever();
renan.descrever();

console.log(vitor);
*/

//Comparar pessoas
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);

//Exercícios
/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm.toFixed(3);
    }
    calcularValorPercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10);

console.log(uno.calcularValorPercurso(350, 4.8));
console.log(palio.calcularValorPercurso(350, 4.8));

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class People {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
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
}

const jose = new People('Jose', 70, 1.75);
console.log(jose.classificarIMC());

const joao = new People('Joao', 63, 1.75);
console.log(joao.classificarIMC());

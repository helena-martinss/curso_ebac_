function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.falar = function() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

function Homem(nome, idade) {
    Pessoa.call(this, nome, idade);
}

function Mulher(nome, idade) {
    Pessoa.call(this, nome, idade);
}

const maria = new Mulher("Maria", 18);
const pedro = new Homem("Pedro" , 20);
const helena = new Mulher("Helena" , 22);

console.log(maria.falar());
console.log(pedro.falar());
console.log(helena.falar());
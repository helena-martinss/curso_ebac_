class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('Helena', 9)
const aluno2 = new Aluno('Maria', 5)
const aluno3 = new Aluno('Júlia', 1)
const aluno4 = new Aluno('Pedro', 7) 

const listaDeAlunos = [aluno1, aluno2, aluno3, aluno4]

function foiAprovado() {
    return listaDeAlunos.filter(function(aluno) {
        return aluno.nota > 6;
    })
}

console.log(foiAprovado())
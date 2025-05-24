class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('Helena', '9')
const aluno2 = new Aluno('Maria', '5')
const aluno3 = new Aluno('Júlia', '1')
const aluno4 = new Aluno('Pedro', '7') 

const listaDeAlunos = [aluno1, aluno2, aluno3, aluno4]

function foiAprovado() {
    for (let i = 0; i < listaDeAlunos.length; i++) {
        if (listaDeAlunos[i].nota > 6) {
            console.log(`O aluno(a) ${listaDeAlunos[i].nome} foi aprovado(a) com nota ${listaDeAlunos[i].nota}`)
        }
    }
}

foiAprovado()
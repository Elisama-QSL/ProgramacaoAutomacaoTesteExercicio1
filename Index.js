/**
 * Console API
 */


console.log("Aula inicial js")

console.error("Falha de Execução")

console.warn("Ateção!")

console.table([{
    nome: 'Elis',
    turma: '02',
    disciplina: 'Proramação JS'
},
{nome: 'Lisa',
    turma: '02',
    disciplina: 'Proramação JS'
}])


//const para informações que nunca mudam
//var ou let para informações que podem mudar

//informações de um dog que não mudam
const nome = 'Loki'
const raca = 'SRD / vira-lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'


//informações que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let cadastrado = false
let tamanho = 'M'

const irmaos = [
    {
        nome: "Thor",
        idade: 2
    },
    {
        nome: "Hela",
        idade: 3
    }
]
console.table(irmaos)

console.log("5" + 1)

const pet = [{nome: 'Lure ', idade: '2 anos'}]
console.table(pet)

const turma = "02"

console.log("Aula 03 da Turma" + turma + "no Sábado dia 05 de Abril")

console.log(`Aula 03 da Turma ${turma} no Sábado dia 05 de Abril`)

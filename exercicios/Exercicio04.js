

const nomeDog = 'Bandite'
const pesoDog = 13
//const racao = 30
const estoque = 5000

const qtdRacaoPorDia = pesoDog * 30
const diasEstoque = Math.floor(estoque / qtdRacaoPorDia)

console.log(`Nome do dog: ${nomeDog}`)
console.log(`Peso: ${pesoDog} kg`)
console.log(`Gramas por dia: ${qtdRacaoPorDia}  g`)
console.log(`Duração do estoque: ${diasEstoque} dias`)

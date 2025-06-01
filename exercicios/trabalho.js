/**
 * 
    * Trabalho Final
 */



// 1. Crie uma função que recebe o nome de um cachorro e imprime no console o nome do cachorro em letras maiúsculas.

const Dog = 'Pantera'
function geradorDeTagsDeIdentificacao(Dog){
    console.log(`O nome do dog é ${Dog.toUpperCase()}`);
}






// 2. Crie uma função que recebe a idade e o peso de um cachorro e imprime no console se ele pode ser adotado ou não.

const idadeDog = 1
const porteDog = 'M' 

function verificarSePodeSerAdotado(idadeDog, porteDog) {
    const peso = 20

    porteDog = peso <= 20 ? 'M' : 'P'
    console.log(`Idade: ${idadeDog}`)
    console.log(`Porte: ${porteDog}\n`)
}  




// 3. Crie uma função que recebe o nome, idade e peso de um cachorro e retorna a quantidade de ração necessária para ele por dia em gramas.
    
const nomeDog = 'Pitoco'
const pesoDog = 14.5
 const idade = 1   
const qtdRacaoPorDia = 0

function calcularConsumoDeRacao(nomeDog, idade, pesoDog, qtdRacaoPorDia) {


    qtdRacaoPorDia = pesoDog <= 14.5 ? 4350 : 0
    
    console.log(`Nome do dog: ${nomeDog}`)
    console.log(`Idade: ${idade}`)
    console.log(`Peso: ${pesoDog} kg`)
    console.log(`Gramas por dia: ${qtdRacaoPorDia}  gramas`)
   
}



// 4. Crie uma função que recebe o porte de um cachorro e retorna a atividade adequada para ele.

const porte = `pequeno`
let atividade

function decidirTipoDeAtividadePorPorte(porte, atividade) {
  switch (porte) {
    case 'pequeno':
      atividade = 'Brincar dentro de casa'
      break
    default:
      atividade = 'Porte inválido'
  }
  console.log(`Porte: ${porte}`)
  console.log(`Atividade: ${atividade}`)
}



// 5. Crie uma função assíncrona que busca um dado de exemplo e imprime no console o resultado.

const dadoDeExemplo = 'Pipoca'

async function buscarDadoAsync(dadoDeExemplo) {
        setTimeout(() => {
        }, 1000);

        if (dadoDeExemplo === 'Pipoca') {
                    console.log(`Resultado: ${dadoDeExemplo}`);
        }else {
                    console.log('Dado não encontrado');
        }
    }

    geradorDeTagsDeIdentificacao(Dog)
    verificarSePodeSerAdotado(idadeDog, porteDog)
    calcularConsumoDeRacao(nomeDog, idade, pesoDog, qtdRacaoPorDia)
    decidirTipoDeAtividadePorPorte(porte, atividade)
    buscarDadoAsync(dadoDeExemplo)


export {
    geradorDeTagsDeIdentificacao, verificarSePodeSerAdotado, calcularConsumoDeRacao, decidirTipoDeAtividadePorPorte, buscarDadoAsync
}



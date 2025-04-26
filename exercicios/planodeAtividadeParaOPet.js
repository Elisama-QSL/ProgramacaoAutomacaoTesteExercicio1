

const nomePet = `Rex`
const porte = `pequeno`
const tempo = 2

let atividade

switch (porte) {
    case 'pequeno':
      atividade = 'Brincar dentro de casa'
      break
    case 'médio':
      atividade ='Caminhada no quarteirão'
      break
    case 'grande':
      atividade ='Correr no parque'
      break
    default:
        atividade =('Porte inválido') 
  }

  let mensagem

  if (tempo < 15){
     mensagem = `Atividade rápida`
   }else if (tempo <= 30){
     mensagem = `Tempo ideal`
   } else {
     mensagem = `Hora da diversão`
  }

  console.log(`${nomePet} : ${mensagem} : ${atividade}`)
  console.log(`O nome do cachorro é: ${nomePet} `)
  console.log(`${mensagem} `)
  console.log(`${atividade} `)
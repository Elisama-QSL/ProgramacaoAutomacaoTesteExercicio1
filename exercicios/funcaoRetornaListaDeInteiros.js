// 1. Crie uma função que receba uma lista com número e string e retorne uma lista com os números inteiros .

  const listarInteiros = () => {
    const lista = ['Carro', 1, 7, 3, 'Casa', 30, 51, '1,5',  'Bandite@']
    const listaInteiros = lista.filter(item => Number.isInteger(item) && typeof item === 'number')
    return listaInteiros
  }


  console.log(listarInteiros())
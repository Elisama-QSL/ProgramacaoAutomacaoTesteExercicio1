/**
 * listaDeAlunos
    Matheus
    Renata
    Leandro
    Ana
    Lucas

    paraCada (item da) listaDeAlunos
     // dar uma nota aleatória
 * 
 *  para for Each trabalhar com lista
 */


// Exemplo1
/*
     const listaDeAlunos = [
        'Matheus',
        'Renata',
        'Leandro',
        'Ana',
        'Lucas'
    ]

    listaDeAlunos.forEach(aluno => {
        console.log(aluno)
        }
    )
*/


  //Exemplo2
    const listaDeAlunos = [
        {
            nome:'Matheus',
            nota: 7

        },
        {
            nome:'Renata',
            nota: 8
        },
        {
            nome:'Leandro',
            nota: 9
        },
        {
            nome:'Ana',
            nota: 10
        },
        {
            nome:'Lucas',
            nota: 6
        }
       
    ]

    listaDeAlunos.forEach(aluno => {
        console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
        }
    )
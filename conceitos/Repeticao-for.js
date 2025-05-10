/**
 * 
 * para, faca
 *  contador; condicao; manipulacao do contador (incremento ou decremento)
 * 
 * quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++
 * 
 *  */

const quantidadeCalculada = 3

/*
// MODELO 2
for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {

    console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)
}

const gatos = ['Lessie', 'Pony', 'Fumaca']
for(let indice =0; indice < gatos.length; indice++) {
    console.log(`Dando o petisco para ${gatos[indice]}`)
}

*/

// MODELO 3
for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {

const gatos = ['Lessie', 'Pony', 'Fumaca']
for(let indice =0; indice < gatos.length; indice++) {
    console.log(`Dando o petisco para ${gatos[indice]}`)
}
    console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)
}
/**
 * Chama os dados da lista de cães
 */

import {DOGS} from './listadeCaesDados.js'

function entregarPetiscos(listaDeDogs){
    listaDeDogs.forEach(dog => {
        console.log(`Entregando petisco para ${dog}`)
    })
}

entregarPetiscos(DOGS)
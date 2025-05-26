/**
 * 
 * 
 * 
 */

const listaDeBrinquedos = [
    'Bola',
    'Corda',
    'Osso',
    'Sino'
]


/*
  listaDeBrinquedos.forEach(brinquedo => {
        console.log(`O brinquedo ${brinquedo} foi entregue`)
        }
  )*/

 function entregarBrinquedo(brinquedo) {
    console.log(`O brinquedo ${brinquedo} foi entregue`)    
}
//     listaDeBrinquedos.forEach(entregarBrinquedo)
//     listaDeBrinquedos.forEach(function entregarBrinquedo(brinquedo) {
//         console.log(`O brinquedo ${brinquedo} foi entregue`)
//     })
//     listaDeBrinquedos.forEach(function entregarBrinquedo(brinquedo) {
//         console.log(`O brinquedo ${brinquedo} foi entregue`)
//     })
    listaDeBrinquedos.forEach(function entregarBrinquedo(brinquedo) {
        console.log(`O brinquedo ${brinquedo} foi entregue`)
    })



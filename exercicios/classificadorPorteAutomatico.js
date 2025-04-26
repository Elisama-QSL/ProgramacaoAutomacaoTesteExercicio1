/*

    const exibirNomeDoDog = (nome) => {
        console.log(nome)
    }

    const exibirPesoDoDog = (peso) => {
        console.log(peso)
    }

    const peso = 10

    if(peso <= 10) {
        console.log(`Pequeno`)
    }else {
        console.log(`Médio`)
    }  



    exibirNomeDoDog("Bandite")
    exibirPesoDoDog(peso)*/

//Sem função
const nome = 'Bandite'
const peso = 10 
const porte = peso <= 10 ? 'Pequeno' : 'Médio'

console.log(`Nome:${nome}`)
console.log(`Peso:${peso}`)
console.log(`Porte:${porte}`)

//------------


//fazendo função
function classificarPortePorPeso(nome, peso) {
    const porte = peso <= 10 ? 'Pequeno' : 'Médio'
    console.log(`Nome:${nome}`)
    console.log(`Peso:${peso}`)
    console.log(`Porte:${porte}\n`)
}  

// chamando a função
classificarPortePorPeso(`Bandite`, 10)
classificarPortePorPeso(`Pantera`, 14.5)
classificarPortePorPeso(`Oscar`, 30)
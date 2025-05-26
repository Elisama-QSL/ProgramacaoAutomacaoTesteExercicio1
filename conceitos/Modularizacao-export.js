/**
    Sintaxe CommonJS:
        module.exports = {} / require('')
    
    EMS - ECMAScript Standars Module:
       export default {} / import 
        
*/

function exibirNomeCores(paramNomeCor){
    console.log(`O nome da cor é ${paramNomeCor}`)
}

exibirNomeCores('Azul')
exibirNomeCores('Verde')
exibirNomeCores('Vermelho')


// export {} / import
export {
    exibirNomeCores
}
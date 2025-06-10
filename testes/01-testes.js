/**
 * 
    describe -> agrupa os testes
    it -> implementação do teste
 */




import {exibirNomeDogFormatado} from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Teste do Projeto', () => {
    it('deve exibir o nome do dog com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
    })

    it('primeiro teste', () => {

    })

    it('segundo teste', () => {
        throw new Error()

    })

})

export {
    exibirNomeDogFormatado
}
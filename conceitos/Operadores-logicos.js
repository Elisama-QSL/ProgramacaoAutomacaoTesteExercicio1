/*

    && - E lógico (AND)
    || - OU lógico (OR)
    ! - NÃO lógico (NOT)
*/

// && - E lógico (AND)
const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10

console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) // true
console.log(true && true) // true

// || - OU lógico (OR)
const dog = {
    adotado: true,
    peso: 5.3
}

console.log(!dog.adotado || dog.peso <  10) // true

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

// ! - NÃO lógico (NOT)
console.log(!true) // false
console.log(true) // true



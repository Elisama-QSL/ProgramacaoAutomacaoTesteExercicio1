/*
> - maior que
>= - maior ou igual
 < - menor que
 <= - menor ou igual  
 == - igual
=== - igual e do mesmo tipo
!= - diferente
*/

console.log('10 > 5 = ${10 > 5}') // true

//maior que
console.log(10 > 5) // true
console.log(10 > 20) // false

//maior ou igual
console.log(10 >= 10) // true
console.log(10 >= 9) // true

//menor que
console.log(10 < 5) // false
console.log(10 < 20) // true

//menor ou igual
console.log(10 <= 10) // true
console.log(10 <= 9) // false

//igual
console.log(1 == '1') // true
console.log(true == 1) // true
console.log(false == 1) // false 
console.log(null == undefined) // true
console.log('' == 0) // true

//igual e do mesmo tipo  compara valores e tipos em JS
console.log(1 === '1') // false
console.log(true === 1) // false
console.log(false === 1) // false 

//diferente
console.log(1 != 2) // true
console.log(1 !== 2)// true
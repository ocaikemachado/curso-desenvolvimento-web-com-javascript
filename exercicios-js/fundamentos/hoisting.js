console.log('a =', a) // undefined
var a = 2 // mesmo com a variavél sendo declarada após uma solicitação, o codigo não vai dar erro, somente vai apresentar o resultado como undefined
console.log('a =', a) // funciona normalmente

console.log('b =', b) / erro
let b = 2 // o Hoisting (içamento) não funciona quando a variavél é definida com let
console.log('b =', b) // erro


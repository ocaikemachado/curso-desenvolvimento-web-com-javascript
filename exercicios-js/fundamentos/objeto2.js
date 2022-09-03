console.log(typeof Object)
console.log(typeof new Object) // Objeto sendo criado a partir de uma função

const Cliente = function() {} // criação da função
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // classe é uma forma diferente de criar uma função
console.log(typeof Produto)
console.log(typeof new Produto()) // Produto sendo criado a partir de uma classe

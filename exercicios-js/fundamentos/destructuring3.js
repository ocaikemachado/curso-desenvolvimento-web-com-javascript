// Destructuring no parâmetro de uma função

function rand({ min = 0, max = 1000 }) { // números aleatórios entre 0 e 1000 usando o destructuring
    const valor = Math.random() * (max - min) + min // (Math.random = randomizar (aletórios) entre os valores definidos)
    return Math.floor(valor) // (Math.floor) retorna o menor número que está no "x"
}

const obj = { max: 50, min: 40 } // usa a função rand, mas define seu próprio escopo, máximo 50 e mínimo 40.
console.log(rand(obj))
console.log(rand({ min: 955})) // passando somente o valor mímimo
console.log(rand({})) // Objeto vazio = números aleatórios entre 0 e 1000
console.log(rand()) // erro




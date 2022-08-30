const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Number.isInteger serve para ver se o número é inteiro
console.log(Number.isInteger(peso2)) 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed serve para indicar o número de casas decimas que queremos que apareça após o calculo
console.log(media.toString(2)) // converter valor numérico para string (ele não transforma o valor de média porque está como const (constante)), ao colocar o valor como (2) ele transforma em binario
console.log(typeof media)
console.log(typeof Number) // Number com (N) é uma funçao, com (n) é um tipo de dado numérico







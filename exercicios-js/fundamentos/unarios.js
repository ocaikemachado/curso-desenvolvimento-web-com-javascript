let num1 = 1
let num2 = 2

num1++ // acrescenta uma unidade ao valor da variavél
console.log(num1)
--num1 // prioridade maior
console.log(num1)

console.log(++num1 === num2--) // o "num2--" só começa a valer após a operação, por isso causa divergência
console.log(num1 === num2)


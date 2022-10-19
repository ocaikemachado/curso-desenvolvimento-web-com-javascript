const [a] = [10] // valor do array a = 10 (array de uma posição)
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // n1 = 10, n3 = 9, n5 = undefined e n6 = 0 (valor padrão definido na própria array)
console.log(n1, n3, n5, n6)

const [, [, nota]] // foi ignorado o primeiro elemento, o segundo elemento é um array (dentro desse array você ignorou o primeiro elemento e está pegando o segundo que é (nota))
= [[, 8, 8], [9, 6, 8]] // um array de fora composto por 2 outros arrays, você ignora o primeiro array ([, 8, 8]) e vai para o segundo ([9, 6, 8]), dentro dele vai ser ignorado o primeiro elemento e vai ser resgatado o segundo (6)
console.log(nota)

for (var i = 0; i < 10; i++) {  // "i++" = para cada nova repetição o (i) vai ser incrementado até chegar no 10, já que 10 não é menor que 10 (falso)
    console.log(i) // vai apresentar o valor de i (0) e outros algarismos que tem o valor menor que (10), exemplo: 1, 2, 3, 4, 5, 6, 7, 8, 9.
}

console.log('i =', i) // valor da variavél (i) depois que o laço de repetição parou = 10, o valor de (i) é o valor que fez com que eu saísse do laço de repetição, como o valor maximo era ser menor que 10, 10 foi o número já que 10 é maior ou igual a 10.

// exemplos que vi nas perguntas, para melhor entendimento...

for (var i = 0; i < 10; i+=2) {  // vai pulando de 2 em 2 número (2, 4, 6, 8 (todos menores que 10))
    console.log(i)
}

console.log('i =', i)

// pulando de 3 em 3 números

for (var i = 0; i < 10; i+=3) { // 0, 3, 6 e 9 (menores que 10)
    console.log(i)
}

console.log('i =', i)
function rand([min = 0, max = 1000]) { // define o valor máximo e mínimo de um array
    if(min > max ) [min, max] = [max, min] // se min for menor que max, ele inverte a ordem.
    const valor = Math.random() * (max - min) + min // calculo para ver o minimo e máximo (apresenta valor randomizado)
    return Math.floor(valor) // retorna o menor valor do x
}

console.log(rand([50, 40])) // enviou dois números e calculos o min e maximo
console.log(rand([992])) // valor minimo 992
console.log(rand([, 10])) // somente valor maximo 10
console.log(rand([])) // apresenta valor random entre 0 e 1000
console.log(rand()) // erro (undefined)

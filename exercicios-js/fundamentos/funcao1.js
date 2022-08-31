// função executa um processo, define um bloco (a função é um trecho de código que você nomeia e pode usar ele novamente em outras coisas)

function imprimirSoma(a, b) { // essa linha define os dois parâmetros
    console.log(a + b) // essa linha informa que queremos mostrar na tela o resultado de a + b
}

imprimirSoma(2, 3) // essa linha define que a = 2 e b = 3, fazendo o calculo definido na função
imprimirSoma(2) // número inteiro + undefined = NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // vai passar somente o primeiro e segundo parâmetro
imprimirSoma() // undefined = NaN

// Função com retorno
function soma(a, b = 0) { // o 0 vai ser o valor padrão caso esse valor não seja passado na solicitação
    return a + b // retornando o valor
}

console.log(soma(2, 3))
console.log(soma(2)) // o resultado é 2, porque na função o número padrão está como 0, caso fosse 1 o calculo seria 2 + 1 = 3, o valor padrão vira um numero secundario caso seja informado somente um algarismo para uma função que calcula mais de um algarismo
console.log(soma()) // undefined + 0 = NaN




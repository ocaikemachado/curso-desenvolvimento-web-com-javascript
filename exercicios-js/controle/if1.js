function soBoaNoticia(nota) {
    if(nota >= 7) { // if significa "se", se a nota for maior ou igual a 7 vai ser exibida a frase aprovado...
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1) // não aparece, pois, é menor que 7

function seForVerdadeEuFalo(valor) { // procura valor verdadeiro
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1) // true
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?') // true
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2]) // true
seForVerdadeEuFalo({}) // objeto vazio (true)

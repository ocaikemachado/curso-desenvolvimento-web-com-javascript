// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos anilhados de pares nome/valor
const cliente = {
    nome: 'Caike',
    idade: 20,
    peso: 100,
    endereco: {
        logradouro: 'Rua General',
        numero: 165
    }
}

console.log(saudacao) // primeiro nivel 
console.log(exec()) // saudacao dentro do exec
console.log(cliente) // constante

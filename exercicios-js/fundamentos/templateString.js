const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + "!"
const template = 
    `Olá 
    ${nome}!` // template string usando a variavel como entre chaves
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) // forma de calculo com template string

const up = texto => texto.toUpperCase() // função que transforma o texto e deixa em caixa alta
console.log(`Ei... ${up('cuidado')}!`) // a expressão dentro do $ aumentou devido a ordem que recebeu vindo da variavél


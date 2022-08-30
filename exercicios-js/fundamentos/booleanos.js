let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // a exclamação significa "não", exemplo: !!false = false, mas !false = true, isso porque o "!" funciona como se fosse o "-" com "-" = "+"

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')

console.log(!!('' || null || 0 || ' '))// como uma operação tem o valor verdadeiro (true), então o compilador apresenta o resultado true.
console.log(('' || null || 0 || 'epa'))// caso não tenha "!!", ele vai mostrar o unico código que é true (epa)

let nome = ''
console.log(nome || 'Desconhecido') // como o valor não existe, é somente uma aspas sem nada dentro, é informado o valor padrão (Desconhecido)

let nome1 = 'Caike'
console.log(nome1 || 'Desconhecido') // como o valor apresenta o nome "Caike", então é apresentado o nome ao invés da palavra "Desconhecido"










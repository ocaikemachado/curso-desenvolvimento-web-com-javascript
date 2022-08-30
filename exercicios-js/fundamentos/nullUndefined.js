let valor // não inicializada
console.log(valor) // aqui o valor é undefined, pois não foi informado nenhum valor correspondente a ele

// exemplo de indefinição
// console.log(valor2) // aqui o valor não foi declarado ainda (is not defined)

valor = null // ausência de valor (Não aponta para nenhum objeto na memória, "vazia") (sempre usar null para zerar o valor de uma variavél)
console.log(valor) 
// console.log(valor.toString()) // não é possivél acessar com objetos tipo o toString (o toString cria uma representação em string do objeto que o chama), pois a variavél esta vazia "null"

const produto = {}
console.log(produto.preco) // como o produto esta definido, mas o preco não. É indicado o valor undefined (isso só acontece porque antes de preço está o "produto" que está definido, do contrário aconteceria um erro no código)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)










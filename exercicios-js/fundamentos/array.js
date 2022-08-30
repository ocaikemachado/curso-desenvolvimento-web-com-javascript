const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // o "[]" informa a localização dos elementos que vão ser buscados na variavél, nesse caso o primeiro e o quarto elemento (7.7 e 9.2)...
console.log(valores[4]) // indefinido, não existe...

valores[4] = 10 // o código passa a ter o elemento no indice 4, caso fosse informado um valor de indicie maior que o informado na variavél, o proprio javascript informaria que no meio da array tem mais indices...
console.log(valores)
console.log(valores.length) // informa quantos elementos tem na array

valores.push({id: 3}, false, null, 'teste') // o  push permite addicionar mais informações a array, isso não é recomendado por causa da organização do código
console.log(valores)

console.log(valores.pop()) //retorna ultimo valor do array
delete valores[0] // serve para excluir valores no array (o valor do indice tem que ser indicado, no exemplo está o 0 = primeiro)
console.log(valores)

console.log(typeof valores) // array = objeto




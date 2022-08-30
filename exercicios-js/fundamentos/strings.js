const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt busca caractere na ordem indicada (4 caractere de Cod3r é (r))
console.log(escola.charAt(5)) // quando o caractere não existe, o compilador vai mostrar um espaço vazio
console.log(escola.charCodeAt(3)) // valor dentro da tabela UNICODE
console.log(escola.indexOf('3')) // encontra o indice indicado, na palavra Cod3r = C = 0, o = 1, d = 2, 3 = 3, r = 4, como foi informado o indice 3, o sistema vai buscar qual objeto está no indice 3.
console.log(escola.substring(1)) // imprime do caractere 1 para frente (od3r)
console.log(escola.substring(0, 3)) // vai do indice 0 até o indice 3 (Cod3)
console.log('Escola '.concat(escola).concat("!")) // concat é usado para unir duas ou mais strings (concatenar)
console.log('Escola ' + (escola) + ("!")) // outra maneira para concatenar o texto 
console.log(escola.replace(3, 'e')) // susbtitui, no exemplo o 3 por e.

// outros exemplos mostrados na aula
console.log(escola.replace(/\d/, 'e')) // susbtitui todos os digitos que tem no texto pela letra (e)
console.log(escola.replace(/\w/g, 'e')) // substitui todos os caracteres pela letra (e)

console.log('Caike, Joara, Ana Clara'.split(',')) // cria um array separando de acordo com o caractere informado
console.log('Caike, Joara, Ana Clara'.split(/,/)) // outra maneira de criar array







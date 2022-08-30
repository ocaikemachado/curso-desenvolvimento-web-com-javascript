// desafio: duas variaveis cada uma com um valor, o desafio é mudar o valor de uma variavél para que ela apresente o resultado de outra.

/*
let a = 19;

let b = 7;

console.log("Na primeira ordem o valor da variavél (a) é:", a, "e o valor da variavél (b) é:", b);

a = 7;

b = 19;

console.log("Já na segunda ordem o valor da variavél (a) é:", a, "e o valor da variavél (b) é:", b);
*/

// fiz o exercício errado, a maneira correta de fazer é a seguinte:

let a = 19;
let b = 7;
let temp = a;
a = b;
b = temp;

console.log("O valor da variavél (a) é:", a, "e o valor da variavél (b) é:", b);

// a variavél (temp) foi usada para alocar o valor de (a), caso não tivesse essa variavél o valor de (a) seria o mesmo de (a), mas o valor de (b) também seria o valor de (a), a variavél temporária foi importante para que fosse possivél alocar o valor de (a) como (temp), fazendo com que ao informar o valor de temp na variavél (b), o valor fosse alterado sem o erro de calculo.

// [a, b] = [b, a]; é outra forma alternativa de resolver esse desafio.
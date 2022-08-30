var nome = "Caneta" // valor da varivél para os códigos abaixo
var quantidade = 10; // forma antiga de criar uma variavél no javascript
var preco = 6.45; // a separação não é feita com vírgula e sim com ponto (padrão americano)
var imposto = 1.55;
var precoFinal = preco + imposto; // calculo de adição de variavéis
let novaVariavel = "Diferente"; // jeito mais atualizado de criar uma variavél
var total = precoFinal * quantidade; // soma do total

console.log(nome); // apresentação de variavél informada no "var"
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(preco + imposto); // cálculo de valores apresentados na variavél, dentro do console.log
console.log(precoFinal);
console.log(total);

nome = "Canetas Faber Castell"; // vai ser a nova variavél de "nome" para os códigos apresentados abaixo, os códigos acima dessa variavél continuam com o "nome" informado acima deles.
console.log(nome);
console.log(novaVariavel);
console.log(total);

// Exemplo e teste de uma funcionalidade:
console.log("A quantidade total de", nome, "que precisam ser compradas é de", quantidade, "unidades.")
console.log("Cada unidade custa", preco, ", como o produto possui o acréscimo de", imposto,
 "reais de imposto, o valor total de cada caneta fica em torno de", 
 precoFinal, "reais, como estamos comprando", quantidade, "unidades, o valor total das", nome, "fica", total, "reais.")
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) 

// o número 2 foi apresentando nas duas solicitações porque a variavél foi escrita com var, como a var está global (todo o servidor) o valor de var foi atribuido a segunda opção escrita (mais recente), com let é diferente...
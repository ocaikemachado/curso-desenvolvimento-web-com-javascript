let numero = 1
{
    let numero = 2 // let tem escopo somente dentro do bloco
    console.log('dentro =', numero) // o let busca a variavél no escopo fechado, caso não ache (ele usa a variavél do escopo maior mesmo (escopo que sucede o escopo atual))
}

console.log('fora =', numero)

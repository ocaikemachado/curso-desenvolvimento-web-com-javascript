{
    {
        {
            {
                 var sera = "Será???" // mesmo dentro do bloco a variavél é visivél para todo o código, podendo ser usada em outras operações
                 console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) => O exemplo da erro porque quando você define uma variavél dentro da função o escopo desta variavél fica referente a essa função.



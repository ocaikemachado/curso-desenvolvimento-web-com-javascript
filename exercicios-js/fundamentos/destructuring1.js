const pessoa = {
    nome: 'Ana Clara',
    idade: 2,
    endereco: {
        logradouro: 'Rua General',
        numero: 165
    }
}

const { nome, idade } = pessoa // essa operação significa tire de dentro de (pessoa) as informações de (nome e idade)
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // essa operação muda os indentficadores de nome e pessoa, trocando por n e i
console.log(n, i)

const { sobrenome, bemHumorada = true}  = pessoa // essa operação serve para adicionar o atributo (true) a um indentificador, sobrenome vai apresentar (undefined) e bemHumorada vai apresentar (true), essa operação foi realzada porque nenhuma das alternativas foi categorizada no código (undefined)
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa // aqui vamos buscar o endereço que está dentro de pessoa e dentro de endereço, como o valor cep não existe na pasta, ele vai ser categorizado como undefined
console.log(logradouro, numero, cep)

const { conta: { ag, num }} = pessoa // nada existe aqui
console.log(ag, num) // erro no código (tudo é undefined)


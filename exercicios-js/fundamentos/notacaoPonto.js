console.log(Math.ceil(6.1)) // ceil = arredondamento

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) { // "(nome)" é um parâmetro da função (podendo ser atualizado)
    this.nome = nome // vai deixar a função publica
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') // novo parâmetro de nome para 'nome'
const obj3 = new Obj('Mesa') // função construtora, você usa ela para criar outos objetos...
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec() // função 

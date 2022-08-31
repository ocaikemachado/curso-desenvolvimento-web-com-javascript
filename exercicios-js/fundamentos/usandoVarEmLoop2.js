const funcs = [] // o array é preenchido dentro do laço (for)

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // erroneamente o resultado é 10, pois a var global não calcula fora do escopo...
funcs[8]() // erroneamente o resultado é 10, pois a var global não calcula fora do escopo...
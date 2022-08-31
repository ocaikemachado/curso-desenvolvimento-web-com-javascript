const funcs = []

for (let i = 0; i < 10; i++) { // como o let tem função de bloco, a função solicitada fora do bloco vai apresentar os algoritmos corretamente ao solicitar a ordem para ver a localização quando a função foi criada
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // a função sabe o local onde ela foi definida 
funcs[6]() // a função sabe o local onde ela foi definida
funcs[8]() // a função sabe o local onde ela foi definida
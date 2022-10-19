let a = 3 // variavél local

global.b = 123 // variavél global
this.c = 456

this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 3 // global em NODE (Não pode ser feito)
console.log(global.abc)

// this = module.exports






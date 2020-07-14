var txt = 'hola estoy jugando con los metodos de string'
var numberOfCharacters = txt.length // Saber la cantidad de caracteres que tiene
console.log(numberOfCharacters)

//Find in String

var pos = txt.indexOf('o')
console.log(pos)
var lastpos = txt.lastIndexOf('o', 29) // Busca del final al inicio
console.log(lastpos)

pos = txt.search('e')
console.log(pos)
//extraer
var res = txt.slice(10, 18)
console.log(res)

res = txt.substring(0, 5)
console.log(res)

res = txt.substr(10, 18)
console.log(res)

var n = txt.replace(/o/g, 'i')
console.log(n)

var poschar = txt.charAt(0)
console.log(poschar)

var as = txt.charCodeAt(0)
console.log(as)

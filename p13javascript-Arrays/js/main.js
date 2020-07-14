/*
    Considerar el string original "La mejor forma de predecir el futuro es creándolo"
    con base en dicho string, realizar lo siguiente:
    1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO"
*/

var phrase = 'La mejor forma de predecir el futuro es creándolo'
let phraseArr = phrase.split(' ')

let capitalEvenWords = phraseArr
  .map((word, index) => (index % 2 === 0 ? word.toUpperCase() : word))
  .join(' ')
alert(capitalEvenWords)

/*
2.- Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "mejor forma predecir futuro creándolo"
*/

let moreThanFiveWords = phraseArr.filter(word => word.length >= 5).join(' ')
alert(moreThanFiveWords)

/*
3.- Regresar el promedio de caracteres por palabra con base en el string original
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "La frase usa en promedio ${average} caracteres por palabra"
*/

let average =
  phraseArr.reduce((accum, word) => {
    accum += word.length
    return accum
  }, 0) / phraseArr.length

alert(`La frase usa en promedio ${average} caracteres por palabra`)

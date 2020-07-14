//1.- Declarar una variable que contenga un número cualquiera y determinar mediante un mensaje si ese número es par o impar

var number = 8
number % 2
  ? console.log(`The number ${number} is even`)
  : console.log(`The number ${number} is odd`)

//2.- Determinar 2 variables ( base, altura ) e indicar si con ellas se forma un cuadrado o un rectángulo

var width = 19
var heigth = 19

if (width === heigth) {
  console.log('It´s a square')
} else if (width == 0 || heigth == 0) {
  console.log('It´s a line')
} else {
  console.log('It´s a rectangle')
}

//3.- Determinar una variable (numeroDeLados) e indicar el nombre de la figura geométrica que tiene esa cantidad de lados,si numero de lados es mayor que 5, poner un mensaje que diga "tu figura tiene muchos lados "

var numberOfSides = 0

if (numberOfSides === 0) {
  console.log('It´s a circle')
} else if (numberOfSides === 3) {
  console.log('It´s a triangle')
} else if (numberOfSides === 4) {
  console.log('It´s a quadrilateral')
} else if (numberOfSides === 5) {
  console.log('It`s a pentagon')
} else if (numberOfSides >= 6) {
  console.log('your figure has many sides')
} else {
  console.log('There is´nt figure with ' + numberOfSides + ' sides')
}

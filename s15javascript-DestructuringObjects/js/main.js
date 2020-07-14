/*  
    Destructuring objects
    Traer datos de algun lugar y procesarlos 
*/
var arr = [1, 2, 3, 4, 5, 6]

var arr2 = [...arr]

var [, , , , a, b] = arr2

console.log(a)
console.log(b)

var someArray = ['naomi ', 23, 1.53]

var [name, age, height] = someArray
var someObject = {
  name,
  age,
  height,
}

console.log(someObject)

var cars = [
  ['2010', 'Toyota', 'Supra', '300'],
  ['2015', 'Mazda', 'RX7', '350'],
  ['2015', 'Nissan', 'Skyline', '300'],
]

let carsData = cars.map(car => {
  var [year, maker, model, hp] = car
  return { year, maker, model, hp }
})
console.log(carsData)

/* funciones constructoras */
function eat() {
  alert("I'm hungry")
}

function Felino(color, weight, size, specie) {
  this.color = color
  this.weight = weight
  this.size = size
  this.specie = specie
  this.roar = function () {
    alert(`I am a ${this.color} ${this.specie}!!!`)
  }
  this.eat = eat
  this.greeting = function () {
    alert(`Hola soy un ${this.specie}`)
  }
}

//Gato hereda las propiedades de Felino, gato es uyn obbjeto pero viene de la clase Felinos
var gato = new Felino('Negro', 5, 'Pequeño', 'gato')
var leon = new Felino('Amarillo', 200, 'Grande', 'lion')

//Ej.

function Car(year, maker, model, hp) {
  this.year = year
  this.maker = maker
  this.model = model
  this.hp = hp
  this.announce = function () {
    alert(`${this.model} es el mejor para ti`)
  }
}

const carrArrayToObject = car => {
  let [year, maker, model, hp] = cars
  return new Car(year, maker, model, hp)
}
let carsObjects = cars.map(car => carrArrayToObject(car))

console.log(carsObjects)
//console.log(carsObject);

/*var someArray = ["a", "b", "c"];

// arrayName.push(lo que se va agregar) al final del array, modifica el array original.
someArray.push("e");
someArray.push({ name: "naomi" }); //agregando un objeto

//arrayName.splice(#,) agregar un elemento en el indice que le indiquemos parra2: cuantos elemento voy a bborrar, regresa un array con lo que borramos modifica el array
someArray.splice(2, 0, "c", "d", "naomi"); // para no borrrar nada

//Metodo slice  regresa un nuevo array 

//metodo includes () //busca un item 
console.log(someArray);
console.log(someArray[5]);

// itera no regresa nada 
array.forEach(comole llamare a cada item  => {
  vas hacer esto 
});


*/

var someArray = ['a', 1, 'b', 'c']
var someArray2 = ['b', 2, 'e', 'f']

var someArrayConcat = someArray.concat(someArray2)
console.log(someArrayConcat)

let someArrayEntries = someArray.entries()
console.log(someArrayEntries)

var ages = [32, 33, 18, 16, 40]

const checkAdult = age => {
  return age >= 18
}
console.log(ages.every(checkAdult)) //every retorna true o false, cuando es false deja de verrificar

/*
 -map: toma unn array original y aplica un proceso a cada item de ese array original, luego regresa un array con cada item prrocesado
  -reduce : solo regresa un valor
  -filter: Regresa un array con los items filtrados dependiendo una función
 */

var numbersArray = [2, 7, 4, 8, 10, 53, 1, 17]
//map:

var newArray = numbersArray.map(number => {
  return number * number
})

//Usando correctamente arrow function
var newArray = numbersArray.map(number => number * number)

//filter
var pairs = numbersArray.filter(number => number % 2 == 0)

//reduce : array.reduce(function(accum, currentValium, currentIndex,arr),initialValue)
var reduceNumber = numbersArray.reduce((accum, number, currentIndex) => {
  console.log(currentIndex)
  return accum + number
}, 0)

console.log(numbersArray)
console.log(newArray)
console.log(pairs)

var sampleOne = 2
var sampleTwo = '2'

/* console.log(typeof sampleOne);
console.log(typeof sampleTwo);

console.log(sampleOne == sampleTwo); // <- true

var sampleOne = 2;
var sampleTwo = 3;
//console.log( sampleOne == sampleTwo ) //   <- true
//console.log( sampleOne === sampleTwo ) //  <-false
//console.log( sampleOne != sampleTwo )   // <-false 
//console.log( sampleOne !== sampleTwo)   // <-true
//console.log( sampleOne += 1 )           // <-3
//console.log( sampleOne )                // <-3
//console.log( sampleOne -= 1)            // <- 2
//console.log( sampleOne )                // <- 2
//console.log( sampleOne *= 5)            // <- 10
//console.log( sampleOne )                // <- 10
//console.log( sampleOne /= 2)            // <- 5
//console.log( sampleOne )                // <- 5
//console.log( sampleOne %= 3)               // <- 2
//console.log( sampleOne )                // <- 2
//console.log( sampleOne == sampleTwo && sampleOne === sampleTwo ) // <- false
/*debugger
if( sampleOne == sampleTwo ){
    console.log("los valores de las variables son iguales")
}else {
    console.log("los valores de las variables son diferentes")
}
if( sampleOne !== sampleTwo){
    console.log("los tipos de dato son diferentes entre sí")
}*/

if (sampleOne == sampleTwo && sampleOne === sampleTwo) {
  console.log('las variables son idénticas')
} else if (sampleOne == sampleTwo && sampleOne !== sampleTwo) {
  console.log('los valores son iguales pero el tipo de dato es diferente')
} else if (sampleOne != sampleTwo && typeof sampleOne === typeof sampleTwo) {
  console.log('los tipos de dato son iguales pero el valor es diferente')
} else {
  console.log('las variables son completamente diferentes')
}

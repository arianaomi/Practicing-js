/*
1. 
        -Crear una función que reciba una palabra del usuario
        -Si el usuario escribe más de una palabra, indicarle que debe ingresar sólo una palabra
        -Si el usuario ingresa al menos un número dentro de la palabra, indicarle que no puede ingresar números
        -si el usuario ingresa una palabra, evaluar si esa palabra es un palíndromo, Indicar el resultado al usuario
 */

const getWord = () => {
  let word = prompt("Ingresa una palabra");
  let isWord = checkIsWord(word);
  let hasNoNumber = checkHasNumber(word);
  let isPalindrome = checkPalindrome(word);

  if (isWord == true && hasNoNumber == true) {
    word == isPalindrome
      ? alert(`La palabra ${word} es palindromo`)
      : alert(`La palabra ${word} no es palindromo`);
  } else {
    alert("Introduce una nueva palabra");
    getWord();
  }
};

const checkIsWord = (word) => {
  word = word.split(" ");
  if (word.length === 1) {
    return true;
  } else {
    alert(`Debe ser una palabra, no una frase`);
    return false;
  }
};

const checkHasNumber = (word) => {
  let isNumber = word.search(/[0123456789]/g);
  let isString = true;
  isNumber == -1
    ? isString == true
    : (alert("No debe incluir números"), (isString = false));
  return isString;
};

const checkPalindrome = (word) => {
  let palindrome = word.split("").reverse().join("");
  return palindrome;
};

getWord();

/* 2.
        -crear una función que reciba un número del usuario
        -si el usuario ingresa algo diferente a un número, indicarle que debe ingresar un número
        -si el usuario ingresa más de un número ( por ejemplo 22 10, ó 25,15,89) indicarle que debe ingresar únicamente un número
        -si el usuario ingresa un número, descomponer ese número en sus factores primos 
 */

const getUserNumber = () => {
  let number = prompt("Ingresa un número");
  let isNaN = checkIsNumber(number);
  let justOne = checkIsJustOnlyNumber(number);
  let primeFactorArr;

  if (isNaN == false && justOne == true) {
    //console.log("Calculando números primos ");
    primeFactorArr = primeFactor(number);
    alert(
      `Los factores primos de ${number} son los números: ${primeFactorArr}`
    );
    //console.log("primos");
  } else if (isNaN == true) {
    alert(" Deber ser un número");
    getNumber;
  }
};

const checkIsNumber = (number) => {
  checkIsNoNumber = isNaN(number);
  return checkIsNoNumber;
};

const checkIsJustOnlyNumber = (number) => {
  number = number.split(" ");
  if (number.length > 1) {
    alert(`Debe ser solo un número`);
    return false;
  } else {
    return true;
  }
};

const checkPrimeNumber = (number) => {
  if (number === 0 || number === 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const isPrimeNumber = (number) => {
  var primeNumberArr = [];
  for (let i = 0; i <= number; i++) {
    esPrimo = checkPrimeNumber(i);
    if (esPrimo == false) {
      console.log("no es un número primo primo");
    } else {
      primeNumberArr.push(i);
    }
  }
  return primeNumberArr;
};

const primeFactor = (number) => {
  let primeNumbers = isPrimeNumber(number);
  let primeFactorNumber = [];
  let i = 0;

  while (number > 1) {
    if (number % primeNumbers[i] == 0) {
      primeFactorNumber.push(primeNumbers[i]);
      number /= primeNumbers[i];
      i = 0;
    } else {
      i++;
    }
  }
  return primeFactorNumber;
};

//getUserNumber();

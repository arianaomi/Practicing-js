/* 
  Pedir al usuario su nombre completo
  contar la cantidad de letras que tenga su nombre
  contar la cantidad de vocales que tiene su nombre
  indicarle al usuario si la cantidad de letras en su nombre corresponde a un número primo 
*/

const getUserName = () => {
  var userName = prompt('Introduce tu nombre completo', 'ariana naomi')
  let lettersCount = countLetters(userName)
  let vowelCount = countVowels(userName)
  let isPrime = checkPrimeNumber(lettersCount)

  alert(
    ` Tu nombre tiene ${lettersCount} letras, tambien ${vowelCount} vocales`
  )

  isPrime
    ? alert('La cantidad de letras corresponde a un número primo')
    : alert('La cantidad de letras no corresponde a un número primo')

  //primeNumber(numberOfVowels);
}

const countLetters = string => {
  let stringWhithoutSpaces = string.replace(/ /g, '')
  return stringWhithoutSpaces.length
}

const countVowels = string => {
  var vowelCount = string.match(/[aeiou]/gi)
  return vowelCount.length
}

const checkPrimeNumber = number => {
  if (number === 0 || number === 1) {
    return false
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false
      }
    }
  }
  return true
}

getUserName()

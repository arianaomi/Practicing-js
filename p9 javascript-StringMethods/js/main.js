/*
1:
-Pedir al usuario su nombre completo
-Determinar la cantidad de palabras que tiene su nombre
-si la cantidad de palabras es mayor que 3, indicarle al usuario que su nombre es muy largo
-si no, indicar al usuario que tiene un nombre corto
*/

var name = prompt('Ingresa tu nombre completo')
var arrayName = name.split(' ')

if (name == '' || name == ' ') {
  alert('Campo vacio')
} else {
  if (arrayName.length > 3) {
    alert('Tu nombre es muy largo')
  } else {
    alert('Tu nombre es muy corto')
  }
}

/*
    (calle)
    (número)
    (colonia)
    (alcaldía)
    (estado)
    mostrar al usuario su dirección completa con el siguiente formato:
    input ->    san mateo 
                172
                la preciosa
                azcapotzalco
                ciudad de mexico
    output ->   San Mateo, 172, La Preciosa, Azcapotzalco, Ciudad De México
*/

var street = prompt(' Ingresa tu calle', 'san miguel'),
  number = prompt('Ingresa el número de tu domicilio', '94'),
  block = prompt('ingresa tu colonia', 'loma linda'),
  city = prompt('Ingresa tu alcadia', 'Naucalpan de juarez'),
  state = prompt('ingresa tu estado', 'estado de México')
var address = `${street}, ${number}, ${block}, ${city}, ${state}`
var arrAddress = address.split(' ')

var completeAddress = ''

for (let i = 0; i < arrAddress.length; i++) {
  let oneWord = arrAddress[i]
  let firstLetter = oneWord.charAt(0)
  let restLetter = oneWord.slice(1)
  firstLetter = firstLetter.toUpperCase()
  restLetter = restLetter.toLowerCase()
  console.log(firstLetter)
  console.log(restLetter)

  completeAddress = `${completeAddress} ${firstLetter}${restLetter} `
}

alert(completeAddress)

/*
3: 
    Pedir al usuario que escriba una frase
    Pedir al usuario que escriba un caracter
    Indicarle al usuario la cantidad de veces que ese caracter aparece en su frase;
*/

var phrase = prompt('Escribe una frase')
var character = prompt('Escribe un carcater')
var accountCharacter

phrase = phrase.split(character)
accountCharacter = phrase.length - 1
phrase.length - alert(' Tu frase tiene ' + accountCharacter + character)

//otra forma

if (phrase == '' || phrase == ' ' || character == '') {
  alert('Frase o caracter vacíos')
} else {
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == character) {
      account += 1
    }
  }
  if (account != 0) {
    alert(
      'En la frase: ' +
        phrase +
        '. El caracter "' +
        character +
        '" se repite:  ' +
        account +
        ' veces'
    )
  } else {
    alert('El caracter no existe en la frase')
  }
}

/*
4:
    Pedir al usuario su nombre completo
    Mostrarle al usuario sus iniciales con el siguiente formato:
    input  -> "Israel Salinas Martínez"
    output -> I.S.M. 
*/

var fullName = prompt(
  'Ingresa tu nombre completo',
  'ariana naomi lopez puertos'
)
var fullInitials = ''

var arrayFullName = fullName.split(' ')
console.log(arrayFullName)

if (arrayFullName[0] != '') {
  for (let i = 0; i < arrayFullName.length; i++) {
    let initial = arrayFullName[i]
    let nameInitials = `${initial.charAt(0)}`
    nameInitials = nameInitials.toUpperCase()

    fullInitials += `${nameInitials}.`
  }

  alert(`Tus iniciales son: ${fullInitials}`)
} else {
  alert('Campo vacio')
}

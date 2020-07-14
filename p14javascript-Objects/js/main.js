/*
    crear una función que pida al usuario los siguientes datos:
    nombre, apellidos, calle, número, colonia, código postal, alcaldía o municipio
    esa función debe devolver un objeto con la siguiente estructura:
    {
        nombre:
        apellidos:
        direccion:{
            calle:
            numero:
            colonia:
            cp:
            alcaldia:
        }
    }
*/

const getDataUser = () => {
  let name = prompt('Ingresa tu nombre', 'Ariana Naomi')
  let lastName = prompt('Ingresa tus apellidos', 'López Puertos')
  let street = prompt('Ingresa tu calle', 'Cerrada Sann lorenzo')
  let number = parseInt(prompt('Número', 4))
  let block = prompt('Ingresa tu colonia', 'San lorenzo')
  let zipCode = parseInt(prompt('Ingresa tu C.P.', 53426))
  let city = prompt('Ingresa tu municipio', 'Naucalpan de Juarez')
  let dataUser = {
    name,
    lastName,
    address: { street, number, block, zipCode, city },
  }
  console.log(dataUser)
  return dataUser
}

getDataUser()

/* 
    crear una función que pida al usuario un año (2000, 1989, etc).
    la función debe extraer los autos del array cars, cuyo año sea mayor al indicado por el usuario
    por cada auto extraído, mostrar al usuario un mensaje que diga "Opción ${indice}: ${fabricante del auto} ${nombre del auto} del año ${año de fabricación}, con ${hp} caballos de fuerza" 
*/

cars = [
  {
    year: '2000',
    maker: 'Toyota',
    model: 'Corolla',
    hp: '300',
  },
  {
    year: '1967',
    maker: 'Ford',
    model: 'Mustang',
    hp: '500',
  },
  {
    year: '2000',
    maker: 'Nissan',
    model: 'Sentra',
    hp: '128',
  },
  {
    year: '2012',
    maker: 'Mitubishi',
    model: 'Lancer',
    hp: '300',
  },
  {
    year: '2000',
    maker: 'Nissan',
    model: 'Altima',
    hp: '200',
  },
  {
    year: '1990',
    maker: 'Volkswagen',
    model: 'Sedan',
    hp: '80',
  },
  {
    year: '2015',
    maker: 'Nissan',
    model: 'Tiida',
    hp: '200',
  },
]

const getYearOfUser = () => {
  let yearCar = parseInt(prompt('Ingresa un año'))
  let carsFilter = getCar(cars, yearCar)

  isNaN(yearCar)
    ? (alert('Ingresa un número'), getYearOfUser())
    : (carsFilter,
      carsFilter.length == 0
        ? alert(`No se encontraron autos mayores del año ${yearCar} `)
        : null)
}

const getCar = (array, yearCar) => {
  let getCar = array.filter((objectCar, index) => {
    let { maker, model, year, hp } = objectCar //destructuring objects
    parseInt(objectCar.year) >= yearCar
      ? alert(
          `Opción ${
            index + 1
          }: ${maker} ${model} del año ${year}, con ${hp} caballos de fuerza`
        )
      : null
    return parseInt(objectCar.year) >= yearCar
  })

  return getCar
}

getYearOfUser()

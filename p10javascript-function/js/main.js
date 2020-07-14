/* 1:
    -preguntar al usuario el nombre de una figura geométrica (cuadrado, rectángulo, círculo, triángulo)
    -preguntar al usuario qué desea calcular (area, perímetro)
    -dependiendo de la figura y lo que se desea calcular, aplciar la fórmula correspondiente y mostrar al usuario en un alert el resultado del cálculo.
*/

const getFigure = () => {
  var figure = prompt(
    'Qué figura deseas: cuadrado, rectángulo, círculo, triángulo'
  )

  figure = figure.toLowerCase()

  if (figure !== null) {
    let areaOrPerimeter = prompt('Deseas el área o el perímetro?')
    areaOrPerimeter = areaOrPerimeter.toLowerCase()
    switchFigure(figure, areaOrPerimeter)
  } else {
    alert('Selecciona una figura ')
  }
}
// Request data from the figure
const figureBase = () => {
  return parseInt(prompt('Ingresa el valor de la base'))
}
const figureHeight = () => {
  return parseInt(prompt('Ingresa el valor de la altura'))
}

// Area and perimeter operation functions

const squareArea = () => {
  let base = figureBase()
  alert(`El área es: ${Math.pow(base, 2)}`)
}

const squarePerimeter = () => {
  let base = figureBase()
  alert(`El perímetro es: ${base * 4}`)
}

const rectangleArea = () => {
  let base = figureBase()
  let height = figureHeight()

  if (base != height) {
    alert(`El área es: ${base * height}`)
  } else {
    alert('No es un rectángulo')
  }
}

const rectanglePerimeter = () => {
  let base = figureBase()
  let height = figureHeight()

  if (base != height) {
    alert(`El perímetro es: ${base * height}`)
  } else {
    alert('No es un rectángulo')
  }
}

const triangleArea = () => {
  let base = figureBase()
  let height = figureHeight()

  alert(`El área del triángulo es: ${(base * height) / 2}`)
}

const trianglePerimeter = () => {
  let base = figureBase()
  let height = figureHeight()
  alert(`El perímetro del triángulo es: ${base * 3}`)
}

const circleArea = () => {
  let radius = parseInt(prompt('Ingrese el radio de su círculo'))
  alert(`El área del círculo es: ${Math.pow(radius, 2) * Math.PI}`)
}

const circlePerimeter = () => {
  let radius = parseInt(prompt('Ingrese el radio de su círculo'))
  alert(`El perímetro del círculo es: ${2 * Math.PI * radius}`)
}

const switchFigure = (figure, areaOrPerimeter) => {
  switch (figure) {
    case 'cuadrado':
      if (areaOrPerimeter == 'área') {
        squareArea()
      } else {
        squarePerimeter()
      }
      break
    case 'rectángulo':
    case 'rectangulo':
      if (areaOrPerimeter == 'área') {
        rectangleArea()
      } else {
        rectanglePerimeter()
      }
      break
    case 'círculo':
    case 'circulo':
      if (areaOrPerimeter == 'área') {
        circleArea()
      } else {
        circlePerimeter()
      }
      break
    case 'triángulo':
    case 'triángulo':
      if (areaOrPerimeter == 'área') {
        triangleArea()
      } else {
        trianglePerimeter()
      }
      break
    default:
      alert('Opción invalida')
      break
  }
}

getFigure()

/*
2:
    -pedirle al usuario un número entre 0 y 50
    -si el número ingresado por el usuario sale del rango, pedirle que ingrese un número diferente
    -si el número es mayor a 0, imprimir en consola todos los números pares que existan entre 0 y el número ingresado por el usuario

 */

const enterNumber = () => {
  let number = parseInt(prompt('Ingresa un numero entre 0 y 50'))

  if (number > 0 && number < 50) {
    evenFunction(number)
  } else {
    alert('El número no esta en el rango, ingresa un nuevo valor')
    enterNumber()
  }
}

const evenFunction = number => {

  for (let i = 0; i < number; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

enterNumber()

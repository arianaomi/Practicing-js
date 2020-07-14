const startOperation = () => {
  var selectedOperation = prompt('Que operacion deseas realizar?')
  console.log(selectedOperation)

  if (selectedOperation === null) {
    console.log('It´s null')
  } else {
    var value1 = parseInt(prompt('Ingresa el numero 1'))
    var value2 = parseInt(prompt('Ingresa el numero 2'))
    getUserOperation(selectedOperation, value1, value2)
  }
}

const addition = (value1, value2) => {
  console.log('tu elección es una adición')
  alert(`El resultado de la operacion es ${value1 + value2}`)
}

const subtraction = (value1, value2) => {
  console.log('tu elección es una resta')
  alert(`El resultado de la operacion es ${value1 - value2}`)
}

const division = (value1, value2) => {
  console.log('tu elección es una resta')
  if (value2 != 0) {
    alert(`El resultado de la operacion es ${value1 / value2}`)
  } else {
    alert('No se puede realizar la operacionn')
  }
}

const multiplication = (value1, value2) => {
  console.log('tu elección es una resta')
  alert(`El resultado de la operacion es ${value1 / value2}`)
}

const getUserOperation = (selectedOperation, value1, value2) => {
  switch (selectedOperation) {
    case 'suma':
      addition(value1, value2)
      break
    case 'resta':
      subtraction(value1, value2)

      break
    case 'división':
      division(value1, value2)
      break
    case 'multiplicación':
      multiplication(value1, value2)
      break
    default:
      alert('no puedo realizar la operación seleccionada')
  }
}

startOperation()

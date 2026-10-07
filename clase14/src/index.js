// console.log('Hola JS')

let nombre = 'Andres'
const apellido = 'Senn'

nombre = 'Jose'
nombre = 10

// apellido = 'Otro'

// Operadores
// Aritmeticos + - / * %

const sumar = 15 + 20 

// Logicos y Comparación
// > < >= <= !=  && || 
// == === != !==
const edad = 5
const mayoriaDeEdad = 18
// const mayoria_de_edad = 18

const esMayorDeEdad = edad >= mayoriaDeEdad


const nombreCompleto = 'Andres' + ' ' + 'Senn'

console.log(nombreCompleto)

// Estructura de control de flujo

if(edad > mayoriaDeEdad){
    console.log('Es mayor de edad')
}else if(edad === '18'){
    console.log('Tiene 18')
}else{
    console.log('Es menor de edad')
}

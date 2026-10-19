// Funciones

// Declaración
// this
// function suma(a, b){
//     // console.log(5 + 2)
//     const operacion = a + b 
//     return operacion
// }
// // Invocar / Llamar / Ejecutar
// let resultado = suma(10, 5)
// console.log(resultado)

// Flecha

// const suma = (a, b)=>{
//     return a + b
// }
// let resultado = suma(10,5)
// console.log(resultado)

// console-log(suma)

// Callbacks

const a = (cb)=>{
    console.log('Se ejecutó la función a')
    cb()
}

const b = ()=>{
    console.log('Se ejecutó el callback que es la función b')
}
const c = ()=>{
    console.log('Se ejecutó el callback que es la función c')
}

a(b)

a(c)



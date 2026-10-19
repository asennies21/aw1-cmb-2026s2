// Operaciones con Arreglos

// ForEach -> .forEach()
// No devuelve nada
// const numeros = [5,20,1,8,9]
// const numerosMasUno = []

// numeros.forEach((numero /*,indice, arreglo*/)=>{
//     numerosMasUno.push(numero + 1)
// })

// console.log(numerosMasUno)

// Map -> .map()
// Map devuelve un nuevo arreglo
const numeros = [5,20,1,8,9]

const numerosMasUno = numeros.map((numero)=>{
    return numero + 1
})

console.log(numerosMasUno)
// filter y find
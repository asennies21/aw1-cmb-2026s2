const personas = [
    {
        nombre: "Andres",
        edad: 20
    },
    {
        nombre: "José",
        edad: 21
    },
    {
        nombre: "Camila",
        edad: 25
    },
]


// forEach -> no me devuelve nada
// personas.forEach((elementoDelArreglo, indice, arreglo)=>{
//     console.log(elementoDelArreglo.edad, indice, arreglo)
// })
// map -> devuelve un nuevo arreglo (return)
// const nuevoArregloPersonas = personas.map((persona, indice, arreglo)=>{
//     // const nuevaPersona = {
//     //     ...persona,
//     //     edad: persona.edad + 1
//     // }
//     // return nuevaPersona
//     return {
//         ...persona, // (spread)
//         // nombre: persona.nombre,
//         edad: persona.edad + 1
//     }
// })
// console.log(nuevoArregloPersonas)
// filter -> devuelve un nuevo arreglo
// const nuevoArregloPersonas = personas.filter((persona, indice, arreglo)=>{
//     return persona.edad > 20 // Expresion que devuelve true o false
// })
// console.log(nuevoArregloPersonas)
// find -> devuelve el primer elemento que cuple la condicion 
const nuevoArregloPersonas =  personas.find((persona, indice, arreglo)=>{
    return persona.edad > 20 // Expresion que devuelve true o false
})
console.log(nuevoArregloPersonas)
// let verificador = (numero) => {
//     if (numero < 0) {
//         console.log(`O número digitado foi: ${numero}, portanto é negativo!`)
//     } else if (numero > 0) {
//         console.log(`O número digitado foi: ${numero}, portanto é positivo!`)
//     } else if (numero === 0) {
//         console.log(`O número digitado foi ${numero}, portanto é igual a Zero!`)
//     }
// }

// verificador(0)

// let numeros = [0 , 3 , 5 , 2 , 7 , 1]

// let params = (a , b) => {

//    let resultado = a.includes(b)

//     resultado ? (console.log(`O número ${b} existe dentro da lista.`)) : (console.log(`O número ${b} não existe dentro da lista.`))
// }

// params(numeros, -1)


const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];
console.log(products)

// let result = products.filter((product) => {
//     return product.price===20
// })

// console.log(result)

let result = products.filter((product) => {
    return product.price < 8
})

console.log(result)
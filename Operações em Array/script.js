// MAP = percorrer todo o array

// let lista =["matheus", "jose", "maria"];

// lista.map((item, index)=> {
//     console.log(`PASSANDO: ${item}`)
// })

//REDUCE = O reduce busca reduzir um array

// let numeros = [5, 3, 2, 5];

// let total = numeros.reduce((acumulador, numero, indice, original)=>{
//     console.log(`${acumulador} - total até o momento`)
//     console.log(`${numero} - Valor atual`)
//     console.log(`${indice} - Indice atual`)
//     console.log(`${original} - Array original`)
//     console.log(`================================`)

//     return acumulador += numero;
// })

// console.log(`TOTAL DO REDUCE ${total}`)


//FIND =  faz uma busca com alguma condição devolvendo SOMENTE o primeiro item que satisfaça.

// let lista = [5, 3 , "jose", 2, "matheus"];

// let busca = lista.find((item)=>{
//     if(item === "jose"){
//         return console.log("ITEM ENCONTRADO COM SUCESSO.")
//     }
// })

// console.log(busca)


//FILTER = faz uma busca com base em alguma condição e retorna TODOS os itens que atendam a condição;


let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador", "Jose"];

let resultado = palavras.filter((item) =>  {
    return item === "Jose";
})

console.log(resultado)
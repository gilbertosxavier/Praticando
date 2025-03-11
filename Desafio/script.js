let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log ("Lista de produtos original: " + produtos)

// função length conta o total de itens em um array
console.log(`Temos um total de ${produtos.length} produtos.`)

// função indexOf retorna o indice do elemento procurado ou -1 quando não encontra.
let indice = produtos.indexOf('Mouse')

// função splice remove um ou mais itens da lista a partir de um indice.
produtos.splice(indice, 1)
console.log(produtos)


//método find faz uma busca e retorna o primeiro item que atender as condições
let busca = produtos.find((item) => {
    if(item === 'Teclado'){
        console.log(`Produto encontrado, você buscou por: ${item}`)
    } else {
        console.log(`Produto não encontrado.`)
    }
})

console.log(busca)

// função splice remove um ou mais itens da lista a partir de um indice.
produtos.splice(1,1);
console.log(produtos);

let numeros = [1,3,8,7,0,9];
console.log("Array original: " + numeros)

// função sort ordena os números de menor para maior;
console.log("Números em ordem: " + numeros.sort())

// função shift retira o primeiro item do array
console.log ("Número retirado: " + numeros.shift() )

// função reverse inverte a ordem do array, porém altera o array original;
console.log("Números invertidos: " + numeros.reverse());




let hoje = "11/03/2025";

//função split remove algum caracter de uma string.
//desestruturando a string da varialve hoje, podemos dividir em dia, mes e ano para mandar os valores referentes quando solicitar qualquer um

const [dia, mes , ano] = hoje.split("/");

console.log("Dia " + dia);
console.log("Mês "+ mes);
console.log("Ano " + ano);


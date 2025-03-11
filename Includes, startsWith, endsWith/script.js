let nomes = ["Matheus", "Lucas", "Jose"];

//includes verifica se o que estamos procurando dentro de um array existe ou não... Retorna um resultado Booleano.
if (nomes.includes("Matheus")) {
    console.log("Está na lista!")
}else {
    console.log("Não está na lista!")
}


let nome = "Matheus";

//starsWith verifica em uma variável se a string começa com o que é pedido.
console.log(nome.startsWith("Math"))

//endsWith verifica em um a variável se a string termina com o que é pedido.
console.log(nome.endsWith("us"))

//todos esses métodos são case sensitive e retornarão Booleano.
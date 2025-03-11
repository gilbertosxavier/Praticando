//Spread Operator


// let primeiros = [1 , 2 , 3];

// let numeros = [...primeiros , 4 , 5 , 10];


// console.log(numeros);


// let pessoa = {
//     nome: "Gilberto",
//     idade: 33,
//     cargo: "FullStack"
// }

// let novaPessoa = {
//     ...pessoa,
//     status: "ATIVO",
//     cidade: "Pelotas /  RS",
//     telefone: "53992999399"
// }


function novoUsuario (info) {
    let dados = {
        ...info,
        status:"ATIVO",
        inicio:"04/05/2025",
        codigo:"100202"
    }

    console.log(dados)
}

novoUsuario({nome:"Gilberto",sobrenome:"Xavier", cargo:"FullStack"})
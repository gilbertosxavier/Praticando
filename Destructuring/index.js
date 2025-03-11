let pessoa ={
    nome: "Gilberto",
    sobrenome:"Xavier",
    cargo: "Desenvolvedor FullStack",
    empresa: "Google"
};
// let nome ="teste"
// const {nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;

// console.log(nomePessoa);
// console.log(cargo);



// Desconstruindo um Array


let nomes = ["Matheus", "Gilberto", "Ronaldo"];

// let {0:Matheus, 1:Gilberto} = nomes;


// console.log(Matheus)
// console.log(Gilberto)


let [primeironome, segundonome] =  nomes;

console.log(primeironome);
console.log(segundonome)
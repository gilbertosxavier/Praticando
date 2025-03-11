//REST Operator.


// function convidados (...nomes) {
//     console.log("Sejam bem vindos!");
//     console.log(nomes);
// }

// convidados("Gilberto", "Ronaldo", "Renato Gaúcho","Romário")


function gerador (...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);

    console.log(numeroGerado);

    console.log("Número gerado foi: " + numeros[numeroGerado]);
}

// const intervalo = setInterval(() => (gerador(2,45, 5 , 6 , 3 , 76 , 523 , 98 ), 10000));

// clearInterval(intervalo)
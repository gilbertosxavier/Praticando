let listElement = document.querySelector("#app")

let posts = []

function nutriApp () {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    //transforma a resposta em um JSON;
    .then((response) => response.json())
    //recebe a resposta formatada em JSON
    .then((json) => {
        //atribui todos o dados para o array "posts"
        posts = json;

        //executa o map no array posts;
        posts.map((item) => {
            //cria um elemento html "li"
            let liElement = document.createElement("li");
            //cria um elemento html "strong"
            let titleElement = document.createElement("strong");
            //cria um elemento html "img"
            let imgElement = document.createElement("img");
            //cria um elemento html "a"
            let descriptionElement = document.createElement("a");

            //recebe a informação do que tem no "titulo" do array
            let titleText = document.createTextNode(item.titulo);
            //atribui o valor recebido  do array em "titleText" dentro do elemento criado strong "titleElement"
            titleElement.appendChild(titleText);
            //coloca o título recebido dentro do elemento "li"
            liElement.append(titleElement);

            //recebe a informação do que tem no "capa" do array
            imgElement.src = item.capa;
            //atribui o valor recebido do array em "imgElement.src" dentro do elemento criado img "imgElement"
            liElement.appendChild(imgElement);

            //recebe a informação do que tem no "subtitulo" do array;
            let descriptionText = document.createTextNode(item.subtitulo);
            //atribui o valor recebido do array em "descriptionText" dentro do elemento criado "descriptionElement
            descriptionElement.appendChild(descriptionText);
            //criando o elemento html "a" dentro do elemento html "li"
            liElement.appendChild(descriptionElement);
            //criando o elemento html "li" dentro do elemento html "div #app"
            listElement.appendChild(liElement);
        })
    })

    .catch(() => {
        console.log("deu algum erro")
    })
}

nutriApp()
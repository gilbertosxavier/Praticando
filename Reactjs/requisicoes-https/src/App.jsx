import React, { useEffect, useState } from "react";
import './style.css';

//servidor: https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  //Criando e inicializando vazio o array que será utilizado para renderização dos componentes na tela ;
  const [nutri, setNutri] = useState([]);

  // useEffect criado para realizar a requiseção https no servidor;
  useEffect(() => {

    function loadApi() {
      
      //Endereço da requisição sendo armazenado em uma variável;
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      //requisição sendo feita através do método fetch;
      fetch(url)
        //transformando a promessa de resposta em um objeto json;
        .then((response) => response.json())
        //recebendo o json como parametro atribuindo ao array setNutri;
        .then((json)=>{setNutri(json)})
    }
    //função sendo invocada;
    loadApi();
  }, []);// array vazio chama a função sempre que o componente é "montado";

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {/* map para iterar sobre o array nutri */}
      {nutri.map((item) =>{
        return(
          <article key={item.id} className="post" >
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />

            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;

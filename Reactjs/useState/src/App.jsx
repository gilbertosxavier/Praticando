import {useState} from 'react';

import Nome from './components/Nome'

function App ( ) {

  const [aluno, setAluno] = useState('Gilberto')
  // Primeiro termo "aluno" é a variável que será utilizada, o segundo termo "setAluno" é a função que será chamada para realizar a troca do estado;
  function handleName(name){
    setAluno(name)
  //aqui a função é chamada e altera o nome pela propriedade que recebeu;
  }


  return (

  <div>
    <h1>Componente App</h1> <br />
    
    {/*Aqui a váriavel é renderizada e alterada conforme o clique no botão, porém a página não é recarregada */}
    <h2>Olá, {aluno}</h2>

    {/* Aqui a função é chamada através do clique e envia a propriedade "Ronaldo - R9" como parametro para a função setAluno */}
    <button onClick={() => handleName('Ronaldo - R9')} >
      Mudar nome
    </button>
  </div>
 
);
}

export default App;

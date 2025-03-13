import {use, useState} from 'react';


function App ( ) {
  //Cria uma variável (input) para receber o input e manipular (setInput);
  const [input, setInput] = useState('')

  //Cria um array vazio (tarefas) e manipular (setTarefas);
  const [tarefas, setTarefas] = useState([
    
    //Estado inicial do array com 2 elementos, poderia ser vazio.
    'Pagar a conta de energia',
    'Estudar ReactJS'
  ]);


  function handleRegister(e){
    //previne o comportamento padrão do formulário que é enviar dados para algum lugar;
    e.preventDefault();

    //Nessa parte o Spread operator (...) pega tudo que já existe dentro de "tarefas" e junta com o que está chegando pela variável "input";
    setTarefas([...tarefas, input]);
    //Aqui o input é zerado para que possa digitar novamente;
    setInput('')
  }

    return (

  <div>

    <h1>Cadastrando usuário</h1>

    <form onSubmit={handleRegister}>
      <label>Nome da tarefa:</label><br />
      <input 
      placeholder='Digite uma tarefa' 
      value={input}//input recebe o que está sendo digitado e atualizado pelo setInput
      onChange={(e) => setInput(e.target.value)}//setInput atualiza conforme o usuário vai digitando através do método "onChange"
      /><br />

      <button type='submit' >Registrar</button>
    </form>
      <br /><br />

      <ul>
        {/* É feito um map dentro de uma "ul" para criar "li" com as tarefas adicionadas e exibir na tela; */}
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

  </div>
 
);
}

export default App;

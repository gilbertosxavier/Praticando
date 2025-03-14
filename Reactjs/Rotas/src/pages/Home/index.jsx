import {Link} from 'react-router-dom'
function Home() {

 
  return (
    <div>
      <h1>Bem vindo a página Home</h1> <br /><br />
      <Link to="/sobre">Sobre</Link><br />
      <Link to="/contato">Contato</Link>
      <hr /> <br /><br /><br />

      <Link to="/produto/12345" >Acessar produto 12345</Link>
    </div>
  );
}

export default Home;

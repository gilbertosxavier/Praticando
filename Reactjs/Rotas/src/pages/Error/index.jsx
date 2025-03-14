import {Link} from 'react-router-dom'

function Error () {

    return (
        <div>
            <h1>Página de erro!</h1><br /><br />
            <span>Temos essas páginas disponiveis...</span> <br /><br /><br />
            <hr />
            <br></br>

            <Link to="/" >Home</Link><br />
            <Link to="/sobre" >Sobre</Link><br />
            <Link to="/contato" >Contato</Link><br />

        </div>
    )
}

export default Error;
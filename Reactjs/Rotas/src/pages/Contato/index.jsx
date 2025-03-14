import { Link } from "react-router-dom"

function Contato () {
    return(
        <div>
            <h1>Página de Contato</h1>
            <span>Entre em contato pelo fone: 55999999999</span><br /><br />
            <Link to="/" >Home</Link><br />
            <Link to="/sobre" >Sobre</Link>
        </div>
    )
}

export default Contato
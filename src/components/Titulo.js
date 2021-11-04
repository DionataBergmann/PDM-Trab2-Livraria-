import React from "react";
import { Link } from "react-router-dom";
import '../style.css'
import { useState } from "react";

const Titulo = () => {
    const [busca, setBusca] = useState('')

    return(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="/" className="navbar-brand" href="#">
            <img src="livraria.png" alt="Logo livraria" width="40" className="mr-2"/>
            Livraria
        </Link>
        
        <button className="Dados"><Link className="link" to="/dados">Dados</Link></button>
        
    </nav>
    );
}

export default Titulo;
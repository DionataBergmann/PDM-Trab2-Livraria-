import React from "react";
import {Link} from 'react-router-dom';
import '../style.css'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore/lite'
import {db} from '../conectadb';

const ItemLista = (props) => {

    const deletar = async (id) => {
        const livroDoc = doc(db, "livros", id);
        if(window.confirm("Deseja mesmo deletar este livro?"))
        await deleteDoc(livroDoc)
        window.location.reload();
    }

    return (
        <div className="card" key={props.id}>
            <img className="card-img-top" src={props.foto} alt="Livro"/>
            <div className="card-body">
                <h4>{props.titulo}</h4>
                <p>Autor: {props.autor}</p>
                <p>Categoria: {props.categoria}</p>
                <p>Preço: {props.preco.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}</p>
                {/* <Link to={`/editar/${props.id}`} className="btn btn-block btn-info">
                    Editar
                </Link> */}
                <button className="btn btn-block btn-danger" onClick={() => {deletar(props.id)}}>
                    Excluir
                </button>
            </div>
        </div>
    );
}

export default ItemLista;
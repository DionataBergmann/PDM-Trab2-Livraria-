import React from "react";
import { useState } from "react/cjs/react.development";
import {collection, addDoc} from 'firebase/firestore/lite'
import { db } from "../conectadb";
import '../style.css'

const FormLivros = () => {

    const livrosCOllectionRef = collection(db, "livros")

    const [newTitulo, setNewTitulo] = useState("")
    const [newAutor, setNewAutor] = useState("")
    const [newCategoria, setNewCategoria] = useState("")
    const [newPreco, setNewPreco] = useState(0);
    const [newFoto, setNewFoto] = useState("")

    const addLivro = async () => {
        await addDoc(livrosCOllectionRef, {titulo: newTitulo, autor: newAutor, categoria:newCategoria, preco: Number(newPreco), foto: newFoto})
        window.location.reload();
    }

return (
    <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">Titulo:</span>
    </div>
    <input
    onChange={(event)=>{setNewTitulo(event.target.value)}}
      type="text"
      className="form-control"
      placeholder="Insira o titulo do livro..."
     
    />

  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">Autor:</span>
    </div>
    <input
        onChange={(event)=>{setNewAutor(event.target.value)}}
        className="form-control"
        placeholder="Insira o nome do autor..."
      
    />

  <div className="input-group-prepend">
      <span className="input-group-text">Categoria:</span>
      <input
      onChange={(event)=>{setNewCategoria(event.target.value)}}
      className="form-control"
      placeholder="Insira a categoria do livro..."
    />
    </div>
      
  </div>

    <div className="input-group-prepend">
      <span className="input-group-text">Preço R$:</span>
    </div>
    <input
      type="number"
      onChange={(event)=>{setNewPreco(event.target.value)}}
      className="form-control"
      placeholder="Insira o preço do livro..."
      
    />

<div className="input-group-prepend">
      <span className="input-group-text">Foto:</span>
    </div>
    <input
    onChange={(event)=>{setNewFoto(event.target.value)}}
      className="form-control"
      placeholder="Insira a url da imagem..."
      
    />
    <div className="input-group-append">
      <button className="Botao" onClick={addLivro} >Adicionar</button>
      
    </div>
  </div>

);
}

export default FormLivros;
import React, { useEffect, useState } from "react";
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore/lite'

import {db} from '../conectadb';
import ItemLista from "./ItemLista";
import FormLivros from "./FormLivros";
import '../style.css'

const ListaLivros = () => {

    const [livros, setLivros] = useState([])
    
    const getLivros = async () => {
        const livrosCol = collection(db,'livros');
        const livroSnapshot = await getDocs(livrosCol);
        const livroList = livroSnapshot.docs.map(doc => {
            const id = doc.id;
            const dados = doc.data();
            return {id, ...dados};
        });

        console.log(livroList);
        setLivros(livroList)
    }

    const [busca, setBusca] = useState('')

    const [filterLivros, setFilter] = useState([])
    let cont = 0
    let teste = ''
    let teste2 = ''

  useEffect(()=> {
    getLivros();

    setFilter(

      livros.filter(livro => {
        if(livro.titulo.toLowerCase().includes(busca.toLowerCase()) === false){
          cont++
          if(cont == livros.length){
           teste = "Não há livros para mostrar"
           alert("Não há livros para mostrar")
           console.log(teste)
           
          }
          }
          else{
        return livro.titulo.toLowerCase().includes(busca.toLowerCase())
          }
      })
      
    )
  }, [busca])

return (

  <div className="container">
     <FormLivros/>
  <input
        type="text"
        className="form-control searchBar"
        placeholder="Pesquisar por livro"
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
        
        />
        
  <div className="container mt-2">
      <div className="card-columns">
   {filterLivros.map((livro, idx) => (
        <ItemLista key={idx} {...livro} />
        
      ))}
</div>
</div>
  </div>
   
);
}

export default ListaLivros;
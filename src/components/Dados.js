import React, { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore/lite'

import {db} from '../conectadb';
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
    let precos = 0
    let total = 0
    let caro = 0
    let caroTitulo
      for (const livro of livros) {
        precos += Number(livro.preco)
        if(livro.preco > caro){
          caro = Number(livro.preco)
          caroTitulo = livro.titulo
        }
        total++;
      }
    
    const Media = precos/total

    useEffect(() => {
        getLivros();
    }, [])

    return(
        
        <div className="container">
      
               <table className="table table-striped">
                
                <thead> 
                  <tr>
                   
                    <th>Quantidade Total de Livros</th>
                    <th>Preço Médio dos Livros</th>
                    <th>Título do Livro mais caro</th>
                    <th>Valor do Livro mais caro</th>
      
                  </tr>
                  
                  <td className="valores">{total}</td>
                  <td className="valores">
                  {new Intl.NumberFormat('pt-BR', {
                             style: 'currency',
                             currency : 'BRL'
                          }).format(Media)}
                  </td>
                  <td className="valores">{caroTitulo}</td>
                  <td className="valores">
                  {new Intl.NumberFormat('pt-BR', {
                             style: 'currency',
                             currency : 'BRL'
                          }).format(caro)}
                  </td>
                </thead>
              </table>
        
            
        </div>
      
    );
}

export default ListaLivros;
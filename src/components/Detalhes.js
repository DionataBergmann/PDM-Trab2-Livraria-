import React from "react";
import { useParams } from "react-router";

const Detalhes = () => {
    const {id} = useParams();

    return(
        <h2>Detalhes do Livro</h2>
    );
}

export default Detalhes;
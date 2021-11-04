import React from "react";
import { useParams } from "react-router";

const Pesquisa = () => {
    const {id} = useParams();

    return(
        <h2>Pesquisa</h2>
    );
}

export default Pesquisa;
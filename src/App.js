import React from "react";
import ListaLivros from "./components/ListaLivros";
import Titulo from "./components/Titulo";
import Dados from "./components/Dados";


import {BrowserRouter as Router,Route} from "react-router-dom";

const App = () => {
  return (
   <Router>
    <Titulo/>
    <Route path="/" exact component={ListaLivros} />
    <Route path="/dados" component={Dados} />

    </Router>
   
  );
}

export default App;

import "./Home.css"

import { useState } from "react";
import Header from "../components/Header"
import { Link } from "react-router-dom";

function Home() {

  const [contador, setContador] = useState<number>(0);

  function btnClick(){
    setContador(contador + 1);
  }

  return (
    <>
       <Header title="Hello new world" descricao="teste" />
      <button onClick={btnClick}> Clique aqui</button>
      <p> {contador} Cliques! </p>
      <Link to="/Cadastro"> Ir para a página de cadastro </Link>
    </>
  )
}

export default Home

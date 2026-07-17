import "./App.css"

import { useState } from "react";
import Header from "./Header"

function App() {

  const [contador, setContador] = useState<number>(0);

  function btnClick(){
    setContador(contador + 1);
  }

  return (
    <>
       <Header title="Hello new world" />
       <Header title="Hello Another new world" />
      <button onClick={btnClick}> Clique aqui</button>
      <p> {contador} Cliques! </p>
    </>
  )
}

export default App

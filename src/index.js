import { useState } from "react";

export default function Pai() {

  const [qtd, setQtd] = useState(0);

  function contar() {
    setQtd{qtd + 1};
  }

 
return(
  <div className="Container">
    <h1>Contador</h1>

     <div> [qtd] </div>
      <button onClick={contar}> Contar </button>

  </div>
)

}
import { useState } from "react";
import "./style.css";

function Contador() {
  const [count, setCount] = useState(0);

  function somar() {
    setCount(count + 1);
    console.log("Soma: ", count);
  }

  return (
    <div className="container">
      <h1>Contador: </h1>
      <p className="contador">{count}</p>
      <button onClick={somar}>Adicionar + 1</button>
    </div>
  );
}

export default Contador;

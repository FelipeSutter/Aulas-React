import { useState } from "react";

export default function MeuNome({ setNome }) {
  return (
    <div>
      <p>Digite seu nome: </p>
      <input
        type="text"
        placeholder="teste"
        onChange={(e) => setNome(e.target.value)}
      ></input>
    </div>
  );
}

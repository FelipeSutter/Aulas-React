import { useState } from "react";
import loginButton from "./assets/loginImg48x48.png";
import "./index.css";

function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = () => {
    const infos = {
      nome: nome,
      senha: senha,
    };

    console.log(infos);
    setNome("");
    setSenha("");

    localStorage.setItem("infos", JSON.stringify(infos));
  };

  return (
    <>
      <h1>Faça seu Login</h1>
      <div className="input-space">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="input-space">
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button onClick={cadastrar}>
        <img src={loginButton} />
      </button>
    </>
  );
}

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const cadastrar = () => {
    if (nome == "Felipe" && senha == "1234") {
      navigate(`/home/${nome}`);
    } else {
      const infos = {
        nome: nome,
        senha: senha,
      };

      console.log(infos);
      setNome("");
      setSenha("");

      localStorage.setItem("infos", JSON.stringify(infos));
    }
  };

  return (
    <div className="container">
      <h1>Página de Login</h1>
      <form>
        <label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
        </label>
        <label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br />
        </label>

        <button type="button" onClick={cadastrar}>
          Entrar
        </button>
      </form>
    </div>
  );
}

import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { login, setLogin } = useState("");
  const { senha, setSenha } = useState("");

  const { logar } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    logar(login, senha);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Insira seu Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Insira sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button>Entrar</button>
    </form>
  );
}

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const cadastrar = () => {
    const infos = {
      nome: nome,
      senha: senha,
    };

    if (nome == "Felipe" && senha == "1234") {
      navigate(`/home/${nome}`);
    }

    localStorage.setItem("infos", JSON.stringify(infos));

    console.log(infos);
    setNome("");
    setSenha("");
  };

  return (
    <div className="container p-5 my-5 border">
      <h1>Página de Login</h1>
      {/* <form>
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
      </form> */}

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={cadastrar}>
          Entrar
        </Button>
      </Form>
    </div>
  );
}

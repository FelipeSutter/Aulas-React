import { useNavigate } from "react-router-dom";

export default function Contato() {
  const contato = "4002-8922";
  const navigate = useNavigate();

  const enviarContato = () => {
    navigate(`/login/${contato}`, { state: "número diferente" });
  };

  return (
    <div>
      <h1>Contato: {contato}</h1>
      <button onClick={enviarContato}>Enviar Contato</button>
    </div>
  );
}

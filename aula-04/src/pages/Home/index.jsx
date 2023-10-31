import { useParams } from "react-router-dom";

export default function Home() {
  const { nome } = useParams();

  //const nomeDefinido = JSON.parse(localStorage.getItem("infos")).nome;

  //console.log(nomeDefinido);

  return (
    <div>
      <h2>Seja bem-vindo(a), {nome}!</h2>
      <h1>Home</h1>
    </div>
  );
}

import { useParams } from "react-router-dom";

export default function Home() {
  const { nome } = useParams();
  return (
    <div>
      <h1>Home</h1>
      <h2>{nome}</h2>
    </div>
  );
}

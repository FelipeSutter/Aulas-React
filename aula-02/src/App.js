import "./App.css";
import Bio from "./components/Bio";
import Botao from "./components/Botao";

function App() {
  const pessoas = [
    { nome: "Felipe Sutter", idade: "20" },
    { nome: "Roberta Stumpf", idade: "20" },
    { nome: "Fernanda", idade: "43" },
  ];

  const botoes = [
    { title: "Editar" },
    { title: "Excluir" },
    { title: "Salvar" },
  ];

  return (
    <div className="App">
      <h1 className="title">Aula - 02</h1>

      {/* O map vai servir como um forEach percorrendo todo o array
          dentro do map tem uma array function ((item, index) => ())
          item é o parâmetro que utilizamos p/ acessar as informações de dentro do array
          index é a posição do array no momento
          a key serve para ser um identificador único de cada objeto
          os outros são os atributos de nome e idade
      */}

      {pessoas.map((item, index) => (
        <Bio key={index} nome={item.nome} idade={item.idade} />
      ))}

      {botoes.map((item, index) => (
        <Botao key={index} title={item.title} />
      ))}
    </div>
  );
}

export default App;

import './App.css';
import Hello from './components/Hello'
import MeuNome from './components/MeuNome';

function App() {
  // Criar funções, variáveis, etc...

  function clique() {
    console.log("Fui clicado :(");
  }
  
  return (
    <div className="App">
      {/* Bloco de Comentário */}
      <Hello/>
      <MeuNome/>
      <button onClick={clique}>Clique aqui</button>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [nome, setNome] = useState("Vite + React");

  const prova = () =>  {
    console.log("Eu sou a função prova!");
    setCount(prevState => prevState + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    setNome("Alterei o nome na tela!");

  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{nome}</h1>
      <div className="card">
        <input type="text" placeholder='Digite aqui' value={nome} onChange={(e) => setNome(e.target.value)}/>
        </div>
      <div className="card">
        <button onClick={() => prova()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";
import { useState, useParams } from "react";
import MeuNome from "./components/teste/teste";
import Welcome from "./components/teste/welcome";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //   const [nome, setNome] = useState("");

  //   return (
  //     <div>
  //       <h1>Testando nome</h1>
  //       <MeuNome setNome={setNome} />
  //       <Welcome nome={nome} />
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/home/:nome" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;

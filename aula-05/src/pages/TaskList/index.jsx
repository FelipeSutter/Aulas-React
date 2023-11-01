import { useState } from "react";

function TaskList() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const cadastrar = () => {
    setTarefas([...tarefas, novaTarefa]);
    console.log([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  const excluir = (ind) => {
    console.log(`Excluir tarefa: ${ind}`);
    const novoArray = tarefas.filter((item, index) => index != ind);
    setTarefas(novoArray);
    console.log(tarefas);
  };

  return (
    <div>
      <main>
        <h1>Lista de Tarefas</h1>
        <section>
          <h2>Cadastre sua tarefa</h2>
          <input
            type="text"
            placeholder="Digite aqui"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <button onClick={cadastrar}>Cadastrar</button>
        </section>
        <section>
          <h2>Lista de tarefas</h2>
          {tarefas.map((item, index) => (
            <div key={index}>
              <h3>{item}</h3>
              <button onClick={() => excluir(index)}>Excluir</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default TaskList;

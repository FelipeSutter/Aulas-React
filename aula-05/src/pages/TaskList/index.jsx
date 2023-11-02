import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Task from "../../components/Task";
import CreateTask from "../../components/CreateTask";

const url = "https://6542c2c401b5e279de1f8b8f.mockapi.io/tasklist";

function TaskList() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(false);

  const cadastrar = async () => {
    const task = {
      description: "description",
      done: false,
      prioridade: "alta",
      title: novaTarefa,
    };

    try {
      const { data } = await axios.post(url, task);
      console.log(data);
      // forma nova
      setTarefas([...tarefas, data]);
      // forma antiga console.log([...tarefas, novaTarefa]);
      setNovaTarefa("");
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: FAZER MÉTODO DE EDITAR - PUT DICA: vai ser parecido com o cadastrar, tenho que saber qual objeto estou editando.

  const editar = async (id) => {
    console.log(`Editar tarefa: ${id}`);
    try {
      const { data } = await axios.put(`${url}/${id}`);
      console.log(data);
      const arrayFiltrado = tarefas.filter((item) => item.id != id);
      setTarefas(arrayFiltrado);
    } catch (e) {
      console.log(e);
    }
  };

  const excluir = async (id) => {
    console.log(`Excluir tarefa: ${id}`);
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      console.log(data);
      const arrayFiltrado = tarefas.filter((item) => item.id != id);
      setTarefas(arrayFiltrado);
    } catch (e) {
      console.log(e);
    }
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      // const dados = await fetch(
      //   "https://6542c2c401b5e279de1f8b8f.mockapi.io/tasklist"
      // );
      // const infos = await dados.json();
      const { data } = await axios.get(url);
      console.log(data);
      setTarefas(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    console.log("Passou um useEffect");
  }, []);

  //if (loading) return <h1>CARREGANDO....</h1>;

  return (
    <div>
      <main>
        <h1>Lista de Tarefas</h1>
        <button onClick={getTasks} disabled={loading}>
          Get Tasks
        </button>
        <section className="my-border">
          <CreateTask
            value={novaTarefa}
            setValue={setNovaTarefa}
            cadastrar={cadastrar}
          />
        </section>
        <section className="my-border">
          <h2>Lista de tarefas</h2>
          {tarefas.map((item) => (
            <Task key={item.id} item={item} excluir={excluir} editar={editar} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default TaskList;

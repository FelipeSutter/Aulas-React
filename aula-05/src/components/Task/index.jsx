function Task({ item, excluir, editar }) {
  return (
    <div>
      <h3>{item.title}</h3>
      <h3>{item.description}</h3>
      <button onClick={() => excluir(item.id)}>Excluir</button>
      <button onClick={() => editar(item.id)}>Editar</button>
    </div>
  );
}

export default Task;

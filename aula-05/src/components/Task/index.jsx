function Task({ item, fn }) {
  return (
    <div>
      <h3>{item.title}</h3>
      <h3>{item.description}</h3>
      <button onClick={() => fn(item.id)}>Excluir</button>
    </div>
  );
}

export default Task;

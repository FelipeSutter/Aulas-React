function Input({ value, setValue, cadastrar }) {
  return (
    <div>
      <h2>Cadastre sua tarefa</h2>
      <input
        type="text"
        placeholder="Título"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}

export default Input;

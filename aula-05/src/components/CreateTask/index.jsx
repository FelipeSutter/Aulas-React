import { Titulo, TituloAmarelo } from "../StyledComponents/styled";

function CreateTask({ value, setValue, cadastrar }) {
  return (
    <div>
      <Titulo>Cadastre sua tarefa</Titulo>
      <TituloAmarelo>Cadastre sua tarefa</TituloAmarelo>

      <input
        type="text"
        placeholder="Título"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={cadastrar} className="m-4 btn-btn-primary">
        Cadastrar
      </button>
    </div>
  );
}

export default CreateTask;

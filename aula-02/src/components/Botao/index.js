//export default function Botao(props) {
export default function Botao({ title }) {
  function mensagem() {
    window.alert(`Eu sou o botão ${title}`);
  }

  return (
    <button onClick={mensagem} style={{ marginRight: 10, padding: 20 }}>
      {title}
    </button>
  );
}

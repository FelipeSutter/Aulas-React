export default function Gatinho({ id, url, width, height }) {
  return (
    <div>
      <h2>Id da Imagem: {id}</h2>
      <img src={url} width={width} height={height} />
    </div>
  );
}

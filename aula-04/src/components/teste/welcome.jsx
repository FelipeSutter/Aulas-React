function Welcome({ nome }) {
  function recuperarNome(p) {
    return `Bem-vindo, ${p}`;
  }

  return (
    <>
      <p>{recuperarNome(nome)}</p>
    </>
  );
}

export default Welcome;

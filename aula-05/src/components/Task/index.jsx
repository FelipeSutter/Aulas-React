import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
} from "react-icons/fc";
import { GiAnchor } from "react-icons/gi";

function Task({ item, excluir, editar }) {
  const escolhePrioridade = (prioridade) => {
    switch (prioridade) {
      case "alta":
        return <FcHighPriority />;
      case "normal":
        return <FcMediumPriority />;
      case "baixa":
        return <FcLowPriority />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <Card.Header>
        {escolhePrioridade(item.prioridade)}
        {item.title}
        <GiAnchor />
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="danger" onClick={() => excluir(item.id)}>
          Excluir
        </Button>
        <Button variant="primary" onClick={() => editar(item.id)}>
          Editar
        </Button>
      </Card.Body>
    </Card>
  );
}
// <div>
//   <h3>{item.title}</h3>
//   <h3>{item.description}</h3>
//   <button onClick={() => excluir(item.id)}>Excluir</button>
//   <button onClick={() => editar(item.id)}>Editar</button>
// </div>

export default Task;

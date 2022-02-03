import { useContext } from "react";
import { useParams } from "react-router";
import {
  Button,
  Container,
  Input,
  ValueInputs,
} from "../../components/formComponents";
import { Header } from "../../components/Homecomponents";

export default function Entries() {
  const { IDentrie } = useParams();
  return (
    <Container>
      <Header>{`Nova ${IDentrie === "input" ? "entrada" : "saída"}`}</Header>
      <ValueInputs>
        <Input type="text" placeholder="Valor" name="value" required></Input>
        <Input
          type="text"
          placeholder="Descrição"
          name="description"
          required
        ></Input>
        <Button>{`Salvar ${
          IDentrie === "input" ? "entrada" : "saída"
        }`}</Button>
      </ValueInputs>
    </Container>
  );
}

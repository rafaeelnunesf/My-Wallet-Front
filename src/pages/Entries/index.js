import { useContext } from "react";
import {
  Button,
  Container,
  Input,
  ValueInputs,
} from "../../components/formComponents";
import { Header } from "../../components/Homecomponents";
import userContext from "../../contexts/usercontext";

export default function Entries() {
  const { entrie } = useContext(userContext);
  return (
    <Container>
      <Header>{`Nova ${entrie}`}</Header>
      <ValueInputs>
        <Input type="text" placeholder="Valor" name="value" required></Input>
        <Input
          type="text"
          placeholder="Descrição"
          name="description"
          required
        ></Input>
        <Button>{`Salvar ${entrie}`}</Button>
      </ValueInputs>
    </Container>
  );
}

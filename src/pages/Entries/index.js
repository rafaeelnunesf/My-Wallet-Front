import styled from "styled-components";
import { Button, Container, Input } from "../../components/formComponents";
import { Header } from "../../components/Homecomponents";

export default function Entries() {
  return (
    <Container>
      <Header>Nova entrada</Header>
      <ValueInputs>
        <Input type="text" placeholder="Valor" name="value" required></Input>
        <Input
          type="text"
          placeholder="Descrição"
          name="description"
          required
        ></Input>
        <Button>Salvar Entrada</Button>
      </ValueInputs>
    </Container>
  );
}
const ValueInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

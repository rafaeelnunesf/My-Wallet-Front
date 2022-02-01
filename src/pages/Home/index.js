import { Container } from "../../components/formComponents";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import exit from "../../assets/exit.svg";
import { useNavigate } from "react-router";
import {
  Header,
  EntriesScreen,
  Buttons,
  EntrieButton,
} from "../../components/Homecomponents";

export default function Home() {
  let navigate = useNavigate();
  return (
    <Container>
      <Header>
        <h1>Olá Fulano</h1>
        <img src={exit} alt="sair" onClick={() => navigate("/")}></img>
      </Header>
      <EntriesScreen>
        <h1>Não há registros de entrada ou saída</h1>
      </EntriesScreen>
      <Buttons>
        <EntrieButton>
          <img src={plus} alt="plus"></img>
          <p>Nova entrada</p>
        </EntrieButton>
        <EntrieButton>
          <img src={minus} alt="minus"></img>
          <p>Nova saída</p>
        </EntrieButton>
      </Buttons>
    </Container>
  );
}

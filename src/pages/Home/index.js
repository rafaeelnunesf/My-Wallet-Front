import { Container } from "../../components/formComponents";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import exit from "../../assets/exit.svg";
import { useNavigate, useParams } from "react-router";
import {
  Header,
  EntriesScreen,
  Buttons,
  EntrieButton,
} from "../../components/Homecomponents";
import { useContext, useEffect, useState } from "react";
import authContext from "../../contexts/authContext";
import api from "../../services/api";

export default function Home() {
  let navigate = useNavigate();
  const { userData } = useContext(authContext);

  return (
    <Container>
      <Header>
        <h1>{`Olá ${userData.name}`}</h1>
        <img src={exit} alt="sair" onClick={() => navigate("/")}></img>
      </Header>
      <EntriesScreen>
        <h1>Não há registros de entrada ou saída</h1>
      </EntriesScreen>
      <Buttons>
        <EntrieButton onClick={() => navigate(`/entries/input`)}>
          <img src={plus} alt="plus"></img>
          <p>Nova entrada</p>
        </EntrieButton>
        <EntrieButton onClick={() => navigate(`/entries/output`)}>
          <img src={minus} alt="minus"></img>
          <p>Nova saída</p>
        </EntrieButton>
      </Buttons>
    </Container>
  );
}

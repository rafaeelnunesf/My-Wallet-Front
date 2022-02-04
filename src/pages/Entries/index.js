import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  Container,
  Input,
  ValueInputs,
  CurrencyInputValue,
} from "../../components/formComponents";
import { Header } from "../../components/Homecomponents";
import dayjs from "dayjs";
import api from "../../services/api";
import authContext from "../../contexts/authContext";

export default function Entries() {
  const { IDentrie } = useParams();
  const [entrieData, setEntriedata] = useState({
    value: "",
    description: "",
    date: dayjs().format("DD/MM/YYYY"),
  });
  const { userData } = useContext(authContext);
  let navigate = useNavigate();

  function handleCurrencyEntries(value, name) {
    setEntriedata({
      ...entrieData,
      [name]: parseFloat(value.replace(",", ".")),
    });
  }
  function handleEntries(e) {
    setEntriedata({ ...entrieData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const headers = { headers: { Authorization: `Bearer ${userData.token}` } };
    try {
      await api.postEntrie(headers, IDentrie, { ...entrieData });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Header>{`Nova ${IDentrie === "input" ? "entrada" : "saída"}`}</Header>
      <ValueInputs onSubmit={handleSubmit}>
        {/* <Input type="text" placeholder="Valor" name="value" required></Input> */}
        <CurrencyInputValue
          id="input-example"
          name="value"
          placeholder="Valor"
          decimalsLimit={2}
          prefix={`R$ `}
          groupSeparator={"."}
          decimalSeparator={","}
          onValueChange={(value, name) => handleCurrencyEntries(value, name)}
        />
        <Input
          type="text"
          placeholder="Descrição"
          value={entrieData.description}
          name="description"
          onChange={handleEntries}
          required
        ></Input>
        <Button type="submit">{`Salvar ${
          IDentrie === "input" ? "entrada" : "saída"
        }`}</Button>
      </ValueInputs>
    </Container>
  );
}

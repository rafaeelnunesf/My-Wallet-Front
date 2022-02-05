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
import { useLocation } from "react-router-dom";

export default function Entries() {
  const { page, type } = useParams();
  const {search} = useLocation()

  const searchParams = new URLSearchParams(search)
  const _id = searchParams.get('_id')

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
    if(page==="edit"){
      try {
        await api.editEntrie(headers, type, { ...entrieData },_id);
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
      return
    }

    try {
      await api.postEntrie(headers, type, { ...entrieData });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Header>{`${page === "edit" ? "Editar" : "Nova"} ${type === "input" ? "entrada" : "saída"}`}</Header>
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
        <Button type="submit">{`${page === "edit" ? "Atualizar" : "Salvar"} ${
          type === "input" ? "entrada" : "saída"
        }`}</Button>
      </ValueInputs>
    </Container>
  );
}

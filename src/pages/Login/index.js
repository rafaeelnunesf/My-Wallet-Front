import Logo from "../../components/formComponents/Logo";
import { useState, useContext } from "react";
import {
  Container,
  Form,
  Input,
  StyledLink,
  Button,
  Validation,
} from "../../components/formComponents";
import api from "../../services/api";
import { useNavigate } from "react-router";
import authContext from "../../contexts/authContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    emailError: false,
    passwordError: false,
  });
  const { setUserData } = useContext(authContext);

  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({
      emailError: false,
      passwordError: false,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const user = await api.login({ ...formData });
      setUserData({ ...user.data });
      navigate("/home");
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 403) {
        setErrors({ ...errors, passwordError: true });
      } else if (err.response.status === 401) {
        setErrors({ ...errors, emailError: true });
      }
    }
  }

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          hasColor={errors.emailError}
          required
        ></Input>
        {errors.emailError && (
          <Validation>Email inválido ou não cadastrado</Validation>
        )}
        <Input
          type="password"
          placeholder="senha"
          name="password"
          value={formData.password}
          onChange={handleChange}
          hasColor={errors.passwordError}
          required
        ></Input>
        {errors.passwordError && <Validation>Senha inválida</Validation>}
        <Button type="submit">Entrar</Button>
      </Form>
      <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}

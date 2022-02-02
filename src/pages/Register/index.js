import Logo from "../../components/formComponents/Logo";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
  Validation,
} from "../../components/formComponents";
import api from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({
      nameError: "",
      emailError: "",
      passwordError: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password1 !== formData.password2) {
      return setErrors({ ...errors, passwordError: "Senhas incompatíveis" });
    }

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password1,
    };

    try {
      await api.register({ ...userData });
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
      const condition1 =
        "Nome de usuário já cadastrado! Tente outro por favor.";
      const condition2 = "email já cadastrado! Tente outro por favor.";
      const condition3 = '"email" must be a valid email';
      if (err.response.data === condition1)
        setErrors({ ...errors, nameError: condition1 });
      else if (
        err.response.data === condition2 ||
        err.response.data === condition3
      )
        setErrors({ ...errors, emailError: "Email inválido ou já cadastrado" });
    }
  }
  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          hasColor={errors.nameError}
          required
        ></Input>
        {errors.nameError !== "" && <Validation>{errors.nameError}</Validation>}
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          hasColor={errors.emailError}
          required
        ></Input>
        {errors.emailError !== "" && (
          <Validation>{errors.emailError}</Validation>
        )}
        <Input
          type="password"
          placeholder="senha"
          name="password1"
          value={formData.password1}
          onChange={handleChange}
          required
        ></Input>
        <Input
          type="password"
          placeholder="confirme a senha"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          hasColor={errors.passwordError}
          required
        ></Input>
        {errors.passwordError !== "" && (
          <Validation>{errors.passwordError}</Validation>
        )}
        <Button type="submit">Cadastrar</Button>
      </Form>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}

import Logo from "../../components/formComponents/Logo";
import {
  Container,
  Form,
  Input,
  StyledLink,
  Button,
} from "../../components/formComponents";

export default function Login() {
  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form>
        <Input type="email" placeholder="email" name="email" required></Input>
        <Input
          type="password"
          placeholder="senha"
          name="password"
          required
        ></Input>
        <Button type="submit">Entrar</Button>
      </Form>
      <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}

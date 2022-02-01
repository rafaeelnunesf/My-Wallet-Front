import Logo from "../../components/Logo";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/formComponents";

export default function Register() {
  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form>
        <Input type="text" placeholder="nome" name="name" required></Input>
        <Input type="email" placeholder="email" name="email" required></Input>
        <Input
          type="password"
          placeholder="senha"
          name="password"
          required
        ></Input>
        <Input
          type="password"
          placeholder="confirme a senha"
          name="password"
          required
        ></Input>
        <Button type="submit">Cadastrar</Button>
      </Form>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}

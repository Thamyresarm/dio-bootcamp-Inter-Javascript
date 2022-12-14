import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types"

const schema = yup
  .object({
    email: yup.
      string()
      .email("Email inválido")
      .required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres").
      required("Campo Obrigatório"),
  })
  .required();

const Login = () => {

  const { 
    control, 
    formState: { errors, isValid } 
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

console.log(isValid)
  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input name="email" placeholder="Email" 
          control={control} errorMessage={errors?.email?.message} />
          <Spacing />
          <Input name="password" type="password" placeholder="Senha" 
          control={control} errorMessage={errors?.password?.message} />
          <Spacing />
          <Button title="Entrar" isDisabled={!isValid} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;

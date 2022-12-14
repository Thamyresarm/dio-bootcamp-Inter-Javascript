import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../componentes/Button';
import { Header } from '../../componentes/Header';
import { Input } from '../../componentes/Input';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from "../../services/api"

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo Obrigatório'),
    senha: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
  }).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    // console.log(isValid, errors)

    const onSubmit = async(formData: FieldValues) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.senha}`)
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
            console.log('retorno api', data)
        } catch (error) {
            alert('Ocorreu um erro ' + error)
            
        }
    }

    // const handleClickSignIn = () => {
    //     navigate('/feed')
    // }

    return (<>
        <Header autenticado={false}/>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input errorMessage={errors?.email?.message} placeholder="E-mail" name="email" control={control} leftIcon={<MdEmail />}/>

                        <Input errorMessage={errors?.senha?.message} type="password" placeholder="Senha" name="senha" control={control} leftIcon={<MdLock />} />

                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }
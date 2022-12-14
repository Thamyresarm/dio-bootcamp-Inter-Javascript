import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../componentes/Button';
import { Header } from '../../componentes/Header';
import { Input } from '../../componentes/Input';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from "../../services/api"

import { Container, Title, Column, TitleLogin, SubtitleLogin, Row, Wrapper, LoginText, TermosText } from './styles';

const schema = yup.object({
    nome: yup.string().required('Campo Obrigatório').min(3, 'No minimo 3 caracteres'),
    email: yup.string().email('email não é valido').required('Campo Obrigatório'),
    senha: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
  }).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

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

    return (<>
        <Header autenticado={false}/>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input errorMessage={errors?.nome?.message} placeholder="Nome Completo" name="nome" control={control} leftIcon={<MdPerson />}/>
                        
                        <Input errorMessage={errors?.email?.message} placeholder="E-mail" name="email" control={control} leftIcon={<MdEmail />}/>

                        <Input errorMessage={errors?.senha?.message} type="password" placeholder="Senha" name="senha" control={control} leftIcon={<MdLock />} />

                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <TermosText>Ao clicar em "criar minha conta grátis, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermosText>                        
                        <TermosText>Ja tenho conta. <LoginText>Fazer login</LoginText></TermosText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }
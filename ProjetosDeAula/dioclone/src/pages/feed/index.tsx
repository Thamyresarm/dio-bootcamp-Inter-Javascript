import { Card } from '../../componentes/Card';
import { UserInfo } from '../../componentes/UserInfo';

import { Header } from '../../componentes/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Thamyres Magalhães" image="https://avatars.githubusercontent.com/u/24790794?v=4" percentual={25}/>
                <UserInfo nome="Thamyres Magalhães" image="https://avatars.githubusercontent.com/u/24790794?v=4" percentual={65}/>
                <UserInfo nome="Thamyres Magalhães" image="https://avatars.githubusercontent.com/u/24790794?v=4" percentual={45}/>
                <UserInfo nome="Thamyres Magalhães" image="https://avatars.githubusercontent.com/u/24790794?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 

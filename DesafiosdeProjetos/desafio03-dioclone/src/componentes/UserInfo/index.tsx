import { Container, NameText, Progress, UserPicture} from './styles';
import { IUser } from './types';

const UserInfo = ({nome,image, percentual}: IUser) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }
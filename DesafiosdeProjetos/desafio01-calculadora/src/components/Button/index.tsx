import { ButtonContainer } from "./styles";

interface Props {
  label: string
  onClick: () => void
}

const Button =({label, onClick}: Props) =>  {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  
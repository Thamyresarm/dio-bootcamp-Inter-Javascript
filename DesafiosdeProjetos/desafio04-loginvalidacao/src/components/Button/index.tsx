import { ButtonContainer } from "./styles";

interface IButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}

const Button = ({ title, onClick, isDisabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={isDisabled}>{title}</ButtonContainer>;
};

export default Button;

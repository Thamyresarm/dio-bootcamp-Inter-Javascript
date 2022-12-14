import { InputContainer } from "./styles";

interface Props {
  value: string
}

const Input = ({value}: Props) =>  {
    return (
      <InputContainer>
        <input disabled value = {value} />
      </InputContainer>
    );
  }
  
  export default Input;
  
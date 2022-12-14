import { ErrorMessage, InputContainer } from "./styles";
import { Control, Controller } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin, any>   
  name: "email" | "password";
  errorMessage?: string;
}

const Input = ({ control, name, errorMessage, ...rest }: IInputProps) => {
  return (
    <>
    <InputContainer>
      <Controller control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <input
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        )}
      />
    </InputContainer>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};

export default Input;

import React from 'react'
import { ButtonContainer } from './styles';

interface IButton {
  name: string
  onClick: () => void
}

function Button({name, onClick}: IButton) {
  return (
    <ButtonContainer onClick={onClick}>
       {name}
    </ButtonContainer>
  )
}

export default Button

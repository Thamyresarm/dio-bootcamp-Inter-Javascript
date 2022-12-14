import React from 'react'

import { InputContainer } from './styles';

interface IInput{
    value: string
    onChange: (e: any) => void
}

function Input({value, onChange}: IInput) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input
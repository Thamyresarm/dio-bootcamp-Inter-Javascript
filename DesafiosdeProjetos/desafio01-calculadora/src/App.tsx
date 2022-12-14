import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setfirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number: string) => {
    if(operation !== '' && currentNumber !== '0'){
      setCurrentNumber('0')
    }
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setfirstNumber('0')
    setOperation('')
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handSumNumber();
          setfirstNumber('0')
          setOperation('')
          break;
        case '-':
          handMinusNumber();
          setfirstNumber('0')
          setOperation('')
          break;
        case 'x':
          handMultiplicarNumber();
          setfirstNumber('0')
          setOperation('')
          break;
        case '/':
          handDividirNumber();
          setfirstNumber('0')
          setOperation('')
          break;
        default:
          break;
      }
    }
  }

  const handSumNumber = () => {
    if (firstNumber === '0') {
      setfirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(sum.toString())
      setfirstNumber(sum.toString())
      setOperation('+')
    }

  }

  const handMinusNumber = () => {
    if (firstNumber === '0') {
      setfirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(minus.toString())
      setfirstNumber(currentNumber)
      setOperation('-')
    }
  }
  
  const handMultiplicarNumber = () => {
    if (firstNumber === '0') {
      setfirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const minus = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(minus.toString())
      setfirstNumber(currentNumber)
      setOperation('x')
    }
  }

  const handDividirNumber = () => {
    if (firstNumber === '0') {
      setfirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const minus = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(minus.toString())
      setfirstNumber(currentNumber)
      setOperation('/')
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="%" onClick={() => handleAddNumber('%')} />
          <Button label="CE" onClick={handleOnClear} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={handDividirNumber} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={handMultiplicarNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handMinusNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handSumNumber} />
        </Row>
        <Row>
          <Button label="+/-" onClick={() => handleAddNumber('+/-')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber(',')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;

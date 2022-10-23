let resultado = gets();
print(checaPalindromo(resultado));

function checaPalindromo(entrada){
  const letras = entrada.split('').reverse().join('')
  if(entrada === letras){
    return "TRUE"
  } else {
    return "FALSE" 
  }
}
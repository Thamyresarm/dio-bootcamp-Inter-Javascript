let valor = gets()

print(isValid(valor))

function isValid(s) {    
    
  let letras = s.split('')
  const stack = ["(",")","{","}","[","]"]; 
  let b = false
  
  for(let i = 0; i < stack.length; i++){
    if ((letras[0] === stack[i]) && (letras[1] === stack [i + 1])){
     b = true;
    } 
  }
  return b;
}
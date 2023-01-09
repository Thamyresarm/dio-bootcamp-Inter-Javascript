let somaDasNotas = 0; 
let contador = 0; 

do { 
     let notaEntradaConsole = parseFloat(gets()); 
     
     if(notaEntradaConsole >= 0 && notaEntradaConsole <= 10){
        somaDasNotas += notaEntradaConsole 
        contador++
     } else {
       print("nota invalida")
     }

     // TODO: Crie as condições necessárias para resolver o desafio e imprima, no final, a média formatando com 2 casas decimais.
}while (contador < 2); 

media = somaDasNotas / 2;
print("media = " + media.toFixed(2))
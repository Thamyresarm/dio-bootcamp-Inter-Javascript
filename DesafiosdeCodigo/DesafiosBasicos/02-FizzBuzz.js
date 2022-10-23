let resultado = gets();
print(fizzBuzz(resultado));

function fizzBuzz(resultado){
  if (resultado % 3 == 0 && resultado % 5 == 0) {
            return "FizzBuzz";
        } else if (resultado % 3 == 0 || resultado % 5 == 0) {
            if (resultado % 3 == 0){
                return "Fizz";
            } else {
                return "Buzz";
            }
        } else {
            return resultado;
        }
}
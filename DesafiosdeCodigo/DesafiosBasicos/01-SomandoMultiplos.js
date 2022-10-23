var a = parseInt(gets());
var N = parseInt(gets());
let soma = 0;

for(let i = 0; i <= N; i++){
  if(i % a === 0)  {
    soma += i;
  }
}

print(soma);
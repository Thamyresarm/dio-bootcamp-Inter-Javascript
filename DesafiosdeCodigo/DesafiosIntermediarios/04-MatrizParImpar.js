let arr = gets().split(''); 
let arrVazio = []; 

for (let i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 0){
    arrVazio.unshift(arr[i])
  } else {
    arrVazio.push(arr[i])
  }
}

print(arrVazio)
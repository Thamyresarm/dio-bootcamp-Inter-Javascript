let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 
let res;
let count;
let countTotal;

const dp = new Array(n + 1).fill(Infinity); 

for (let i = 1; i < dp.length; i++) {
  if (i * i <= n) {
    dp[i] = i * i;
  } else {
    i = dp.length - 1;
  }
}
        
countTotal = 1000;
        
  for (let i = dp.length - 1; i > 0 && i <= n; i--) {

    if ((i > 0) && (dp[i] > 0)) {

      res = n;
      count = 0;

      for (let j = i; j > 0; j--) {

        while (res > 0) {
          if (res >= dp[j]) {
              res = res - dp[j];
              count++;
          } else {
              j--;
          }
        }
      }                

      if (countTotal > count) {
        countTotal = count;
      }

    }  
  }
  
print(countTotal);
let n = parseInt(gets());

print (somatorio(n))

function somatorio(n){
  if (n > 0)
    return n + somatorio(n-1)
  else
    return 0
}
let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

let encontrado = elementos.find(elemento => elemento === valor);

if (encontrado !== undefined){
  let index = elementos.indexOf(encontrado)
  print(`Achei ${encontrado} na posicao ${index}`)
} else {
  print(`Numero ${valor} nao encontrado!`)
}
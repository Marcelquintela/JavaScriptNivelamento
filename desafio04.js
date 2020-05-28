/*
Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:

na primeira posição, a fração de números que são positivos
na segunda posição, a fração de números que são zero
na última posição, a fração de números que são negativos
Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

Escreva a função maisMenos.
*/

function maisMenos(array){
  var resp = [0,0,0];
  for (i=0;i<array.length;i++){
    if (array[i]>0){
      resp[0]++;
    }else if (array[i]==0){
      resp[1]++;
    } else {
      resp[2]++;
    }
  }
  for (var i=0;i<resp.length;i++){
    resp[i]=resp[i]/array.length;
  }
  return(resp)
}
console.log(maisMenos([1, 2,0,-5, -1]) );

/*
Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.

Escreva a função produto
*/

function produto(array) {
  var result=1;
  for (var i=0; i<array.length; i++){
    result = result*array[i];
  }
  return result;
}
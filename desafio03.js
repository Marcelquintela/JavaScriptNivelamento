/*
Escreva uma função fatorial, que calcule o fatorial de um número.
*/

function fatorial(n) {
  if (n<0){
    return("O cálculo fatorial não admite número negativo");
  } else if((n==0)||(n==1)){
    return (1);
  } else{
    var result=1;
    for (var i=n; i>1; i--){
      result = result*i;
    }
  return result;
  }
}

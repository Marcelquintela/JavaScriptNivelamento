//Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele

function somatoria(x){
    var soma = 0;
    for (var i=0; i<x; i++){
        soma =soma+i; //ou soma+=i
    }
    return (soma);
}

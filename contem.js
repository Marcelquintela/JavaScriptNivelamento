//Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.

function contem(array, num){
    if (array.indexOf(num)>-1){
        return (true);
    } else{
        return (false);
    }
}

// tambem pode ser feito diretamente
function contem1(array, num){
    return (array.indexOf(num)>-1);
}

// infelizmente a plataforma estava retornando erro 
//ENOSPC: no space left on device, open '/tmp/jstest-1fb31de8-a5c5-4ba2-8473-6925650f1be3-e46c0f38-8ae4-49a1-a918-f33f0835a150.js'

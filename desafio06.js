/*
Queremos representar uma escada com altura variável, utilizando um array de strings.

Por exemplo, uma escada com altura 3, representaremos com o seguinte array:
var escada3 = [
 "  #",
 " ##",
 "###"
]
E uma escada com altura 5, da seguinte forma:
var escada5 = [
 "    #",
 "   ##",
 "  ###",
 " ####",
 "#####"
]
Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente.

Me dê uma pista:

Em JavaScript você pode repetir um texto usando repeat da seguinte maneira: var degrau = "#".repeat(2); // agora degrau = "##"; 
Isso servirá para montar nossos degraus; 
Mas como faço para inserir a quantidade de degraus de acordo com o número indicado pelo meu array resultado? 
Como inserir um elemento em um array?
*/

function escada(degraus){
  var resp =[]
  for (i=0;i<degraus;i++){
    resp.push("#".repeat(i+1));
  }
  return(resp);
}
console.log(escada(5));

/* 
A PORCARIA DA PLATAFORMA RETORNA O SEGUINTE ERRO:
Erros:
expected [ '#', '##', '###', '####', '#####' ] to deeply equal [ Array(5) ]
*/

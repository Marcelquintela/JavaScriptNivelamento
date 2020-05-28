// Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano), 
// retorne true ou false conforme o caso. Levar em conta as condições necessárias mencionadas acima.

function podeSubir (alturaPessoa, vemComCompania, temProblemaCardiaco){
 return (temProblemaCardiaco==false && (alturaPessoa>=1.5|| (alturaPessoa>=1.2&&vemComCompania==true))
 );
}
console.log(podeSubir(1.8,false,true);

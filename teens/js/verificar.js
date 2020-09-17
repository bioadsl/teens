

function verificar() {
  var correctanswer = document.getElementById("certo");
  
  var pontos = document.getElementById("certo").value;
  document.getElementById("feedback").innerHTML = pontos;
  
      if (correctanswer.checked == true){
         
         document.getElementById("div-certo").style.display = 'block';
         document.getElementById("div-padrao").style.display = 'none';
         acende(); 
        pontos = pontos;
       } else {     
         document.getElementById("div-errado").style.display = 'block';
         document.getElementById("div-padrao").style.display = 'none';
         quebra(); 
       }


}



function voltar() {
  window.history.back();
}

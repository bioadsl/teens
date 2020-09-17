
    var acertos = new Array(
    	'../som/efeito-sonoro-aplausos-1.mp3', 
    	'../som/efeito-sonoro-varinha-magica.mp3', 
    	'../som/lampada-acesa.mp3');
    
    function acertoAleatorio(){
       aleat = Math.random() * acertos.length
       aleat = Math.floor(aleat)
       return  aleat=acertos[aleat];
	  
    }



function acende() {
  var acesa = new Audio();
acesa.src = acertoAleatorio();
acesa.play();
}

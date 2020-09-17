
    var falhas = new Array(
    	'../som/lampada-quebrada.mp3', 
    	'../som/efeito-sonoro-errado.mp3', 
    	'../som/icq-old-sound.mp3', 
    	'../som/som-de-erro-efeito-sonoro.mp3',
      '../som/gato-panico.mp3');
    
    function falhaAleatorio(){
       aleat = Math.random() * falhas.length
       aleat = Math.floor(aleat)
       return  aleat=falhas[aleat];
	  
    }

	function quebra() {
	var quebrada = new Audio();
	quebrada.src = falhaAleatorio();
	quebrada.play();
	}



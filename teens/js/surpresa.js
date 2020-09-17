
var line = 1;
var path = 1;
var pino = '';


function trocaPino(path) {
    
    switch (path) {
        case path = 1:
            pino = 'Azul'
            return '../peoes/azul.png';
        case path = 2:
        	pino = 'Vermelha'
            return '../peoes/vermelho.png';
        case path = 3:
        	pino = 'Verde'
            return '../peoes/verde.png';
        case path = 4:
        	pino = 'Amarela'
            return '../peoes/amarelo.png'; 
    }
}

		// for (var i = 0; i <= 4; i++) {
		//     document.write(trocaPino(i)+'<br>');
		// }

function addInput(divName) {
  var newdiv = document.createElement('div');
  //newdiv.innerHTML  = '['+line +']';
  newdiv.innerHTML += '<img src="'+trocaPino(line)+'" width="20px" >';
  newdiv.innerHTML += '<input type="text" name="text'+line +'_1" id="text'+line +'_1"  placeholder="'+pino+'" aria-label="azul" id="'+pino+'" aria-describedby="'+pino+'">';
  newdiv.innerHTML += '<spam id="'+pino+'"> <spam>';
  document.getElementById(divName).appendChild(newdiv);
  line++;
}

addInput('lines');



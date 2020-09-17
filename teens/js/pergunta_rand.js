


function magica() {
	var caixa = new Audio();
	caixa.src = '../som/efeito-sonoro-ding.mp3';
	caixa.play();
}


var enderecos = new Array(
	"p1.html", 
	"p2.html", 
	"p3.html", 
	"p4.html", 
	"p5.html", 
	"p6.html", 
	"p7.html", 
	"p8.html", 
	"p9.html", 
	"p10.html", 
	"p11.html", 
	"p12.html", 
	"p13.html", 
	"p14.html", 
	"p15.html"
	);

function linkAleatorio(){
	magica()
	aleat = Math.random() * enderecos.length
	aleat = Math.floor(aleat)
	window.location=enderecos[aleat]
}




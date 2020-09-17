var sorteio = Math.floor(Math.randon()*6+1);

switch(sorteio){
	case 1 : document.getElementById("dice").src = "dice1";
	break;
	case 2 : document.getElementById("dice").src = "dice2";
	break;
	case 3 : document.getElementById("dice").src = "dice3";
	break;
	case 4 : document.getElementById("dice").src = "dice4";
	break;
	case 5 : document.getElementById("dice").src = "dice5";
	break;
	case 6 : document.getElementById("dice").src = "dice6";
	break;

  default:
   break;
 
}
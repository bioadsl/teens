 // Jogar o dado 
   function rollTheDice() { 
     setTimeout(function () { 
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
 
               document.querySelector(".img1").setAttribute("src", 
                   "dado\\dice" + randomNumber1 + ".png"); 
          
            }, 500); 
        }


    let currentDroppable = null;

// Azul

    pinoAzul.onmousedown = function(event) {

      let shiftX = event.clientX - pinoAzul.getBoundingClientRect().left;
      let shiftY = event.clientY - pinoAzul.getBoundingClientRect().top;

      pinoAzul.style.position = 'absolute';
      pinoAzul.style.zIndex = 1000;
      document.body.append(pinoAzul);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        pinoAzul.style.left = pageX - shiftX + 'px';
        pinoAzul.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        pinoAzul.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        pinoAzul.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      pinoAzul.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        pinoAzul.onmouseup = null;
      };

    };

    pinoAzul.ondragstart = function() {
      return false;
    };
    
// verde

pinoVerde.onmousedown = function(event) {

      let shiftX = event.clientX - pinoVerde.getBoundingClientRect().left;
      let shiftY = event.clientY - pinoVerde.getBoundingClientRect().top;

      pinoVerde.style.position = 'absolute';
      pinoVerde.style.zIndex = 1000;
      document.body.append(pinoVerde);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        pinoVerde.style.left = pageX - shiftX + 'px';
        pinoVerde.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        pinoVerde.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        pinoVerde.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      pinoVerde.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        pinoVerde.onmouseup = null;
      };

    };

    pinoVerde.ondragstart = function() {
      return false;
    };


// amarelo

pinoAmarelo.onmousedown = function(event) {

      let shiftX = event.clientX - pinoAmarelo.getBoundingClientRect().left;
      let shiftY = event.clientY - pinoAmarelo.getBoundingClientRect().top;

      pinoAmarelo.style.position = 'absolute';
      pinoAmarelo.style.zIndex = 1000;
      document.body.append(pinoAmarelo);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        pinoAmarelo.style.left = pageX - shiftX + 'px';
        pinoAmarelo.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        pinoAmarelo.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        pinoAmarelo.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      pinoAmarelo.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        pinoAmarelo.onmouseup = null;
      };

    };

    pinoAmarelo.ondragstart = function() {
      return false;
    };




// vermelho

pinoVermelho.onmousedown = function(event) {

      let shiftX = event.clientX - pinoVermelho.getBoundingClientRect().left;
      let shiftY = event.clientY - pinoVermelho.getBoundingClientRect().top;

      pinoVermelho.style.position = 'absolute';
      pinoVermelho.style.zIndex = 1000;
      document.body.append(pinoVermelho);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        pinoVermelho.style.left = pageX - shiftX + 'px';
        pinoVermelho.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        pinoVermelho.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        pinoVermelho.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      pinoVermelho.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        pinoVermelho.onmouseup = null;
      };

    };

    pinoVermelho.ondragstart = function() {
      return false;
    };



// geral
    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

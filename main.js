var input = 64;
var size = input*input;
var side = 600/input;

makeGrid();

function makeSquare(){

  const square = document.createElement('div');
  var frame = document.querySelector('#frame');
  square.classList.add('square');
  square.style.height = side + 'px';
  square.style.width = side + 'px';
  frame.appendChild(square);
}

function makeGrid(){

  for (i=0; i<size; i++){
    makeSquare();
  }
}

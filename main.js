makeGrid();

var reset = document.querySelector('#reset');
reset.addEventListener('click', (e)=>{
  clearGrid();
  makeGrid();
});

function makeGrid(){

  var input = prompt('Squares per side?');
  var size = input*input;
  var side = 600/input;

  function makeSquare(){

    const square = document.createElement('div');
    var frame = document.querySelector('#frame');
    square.classList.add('square');
    square.style.height = side + 'px';
    square.style.width = side + 'px';
    square.addEventListener('mouseover', (e)=>{
      square.style.backgroundColor = 'black';
    });
    frame.appendChild(square);
  }

  for (i=1; i<=size; i++){
    makeSquare();
  }
}

function clearGrid(){
  var frame = document.getElementById('frame');
  while (frame.firstChild){
    frame.removeChild(frame.firstChild);
  }
}

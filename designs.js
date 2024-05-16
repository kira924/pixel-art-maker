//create a grid of squares
function makeGrid(height, width) {
  var table = document.getElementById("pixelCanvas");
  var input = '';

  for (var i = 0; i < height; i++){
    input += '<tr class="row-' + i + '">';

    for (var j = 0; j < width; j++){
      input += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
    }

    input += '</tr>';
  }


  table.innerHTML = input;


  AddEventForTD();
}


function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

function AddEventForTD() {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++)
                  //Add event listener
  {
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}


var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value;
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);


document.getElementById('sizePicker').onsubmit = function() {
  formSubmission();
};


makeGrid(10,10);

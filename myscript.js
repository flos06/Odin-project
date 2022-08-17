const container = document.getElementById("container");
let cells = 0


function clearGrid() {
  container.innerHTML= ''
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "cell";
  };
  let mouseCell = document.querySelectorAll(".cell");

mouseCell.forEach(function(input) {
  input.addEventListener('mouseover', function hover() {
    input.setAttribute("style", "background-color:blue;");
  })
})
};

makeRows(16, 16)

let newV = 0
function gridVal(val) {
  newV = val.value
  while (newV > 70) {
    newV = prompt("Please enter a value less than 70")
  }
  newGrid(newV);
}



function newGrid(value) {


  clearGrid();
  
  console.log(value)
  makeRows(value, value)

}


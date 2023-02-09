// Sets important constants and variables
console.log("yow");

let mouseDown = false
const DEFAULT_COLOR = 'rgb(0, 0, 0)';
const DEFAULT_SIZE = 16;
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const grid = document.getElementById("grid");
const colorPick = document.getElementById("favcolor");
const clearBtn = document.getElementById("clearBtn")


colorPick.oninput = (e) => currentColor = e.target.value;
clearBtn.onclick = () => {
  grid.innerHTML = '';
  setupGrid(32);
}

// Creates a default grid sized 16x16
function setupGrid(size = 16) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    console.log(i);
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}

function changeColor(e) {
  if(e.type === 'mouseover' && !mouseDown) return
  e.target.style.backgroundColor = currentColor;
}

setupGrid(32);
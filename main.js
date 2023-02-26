const container = document.querySelector("#container");
const changeRange = document.querySelector("#changeRange");
const sizeText = document.querySelector("#size");
const colorChoice = document.querySelector("#colorChoice");
const changeSize = document.querySelector("#changeSize");
const resetButton = document.querySelector("#reset");

let isPressed = false;

let numberOfDivs = changeRange.value;


startCanva();
changeRange.addEventListener("change", () => {
    sizeText.textContent = `Size: ${numberOfDivs} x ${numberOfDivs}`;
});
resetButton.addEventListener("click", () => {
    reset();
});

function startCanva() {
  sizeText.textContent = `Size: ${numberOfDivs} x ${numberOfDivs}`;
  container.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
  for (let i = 0; i < numberOfDivs * numberOfDivs; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
  draw();
  changeSize.addEventListener("click", () => {
    numberOfDivs = changeRange.value;
    changeCanva();
  });
  changeRange.addEventListener("change", () => {
    numberOfDivs = changeRange.value;
    sizeText.textContent = `Size: ${numberOfDivs} x ${numberOfDivs}`;
  });
}

function changeCanva() {
  sizeText.textContent = `Size: ${numberOfDivs} x ${numberOfDivs}`;
  container.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < numberOfDivs * numberOfDivs; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
  draw();
}

function draw() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        if (!isPressed) return
      box.style.backgroundColor = colorChoice.value;
    });
    box.addEventListener("mousedown", () => {

      box.style.backgroundColor = colorChoice.value;
    });
  });
}

function reset() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
}

window.addEventListener("mousedown", () => {
    isPressed = true
})
window.addEventListener("mouseup", () => {
    isPressed = false
})